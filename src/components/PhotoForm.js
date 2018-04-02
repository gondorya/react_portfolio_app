import React from 'react';

export default class PhotoForm extends React.Component {
    state = {
        title: '',
        description: '',
        imgUrl: ''
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
                            value={this.state.imgUrl}
                            onChange={this.onImgUtlChange}
                        />
                    </p>
                    <button className="button button--add">Add Photo</button>
                </form>
            </div>
        )
    }
}