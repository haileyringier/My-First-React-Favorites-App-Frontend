import React from 'react'

export default class PictureForm extends React.Component {

    state = {
        title: '',
        url: ''
    }

    render() {
    return(
        <form className="picture-form">
            <input 
                name="title" 
                type="text" 
                value={this.state.title} 
                placeholder="Title">
            </input>
            <input 
                className="url-input"
                placeholder="Picture Url" 
                type="text" 
                name="url" 
                value={this.state.url} >
            </input>
            <input 
                className="submit-button" 
                type="submit" 
                value="Add Picture"/>
        </form>
    )
    } 
}