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
        calendarFocused: false
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
        this.setState(() => ({createdAt}));
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({
            calendarFocused: focused
        }));
    };
    render() {
        return (
            <div>
                <form>
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
                            onChange={this.onImgUtlChange}
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