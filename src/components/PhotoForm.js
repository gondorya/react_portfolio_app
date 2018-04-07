import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('DD MMM YYYY'));

export default class PhotoForm extends React.Component {
    state = {
        title: '',
        description: '',
        imgUrl: '',
        createdAt: moment(),
        calendarFocused: false,
        error: false
    };
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onImgUrlChange = (e) => {
        const imgUrl = e.target.value;
        this.setState(() => ({imgUrl}));
    };
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({createdAt}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };
    onSubmit = (e) =>{
        e.preventDefault();
        
        if (!this.state.title || !this.state.imgUrl) {
            this.setState(() => ({error: 'Please add title and image url to new photo'}))
        } else {
            this.setState(() => ({error: false}));
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    { this.state.error && <p>{this.state.error}</p> }
                    <p>
                        <input 
                            type="text"
                            name="title"
                            placeholder="Title"
                            autoFocus
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                    </p>
                    <p>
                        <textarea 
                            name="Description"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            name="Image"
                            placeholder="Image url"
                            value={this.state.imgUrl}
                            onChange={this.onImgUrlChange}
                        />
                    </p>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    <p>
                        <button className="button button--add">Add Photo</button>
                    </p>
                </form>
            </div>
        )
    }
}