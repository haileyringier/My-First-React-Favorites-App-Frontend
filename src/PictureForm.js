import React from 'react'


const initialState = {
    title: '',
    url: ''
}

export default class PictureForm extends React.Component {

    state = {
        title: '',
        url: ''
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitPicture = (event) => {
        event.preventDefault()
        let picture = {title: this.state.title, url: this.state.url}
        this.props.addPicture(picture)
        this.setState(initialState)
    }

    render() {
    return(
        <form className="picture-form" onSubmit={this.submitPicture}>
            <input 
                name="title" 
                type="text" 
                value={this.state.title} 
                placeholder="Title"
                onChange={this.handleChange}>
            </input>
            <input 
                className="url-input"
                placeholder="Picture Url" 
                type="text" 
                name="url" 
                value={this.state.url}
                onChange={this.handleChange}> 
            </input>
            <input 
                className="submit-button" 
                type="submit" 
                value="Add Picture"/>
        </form>
    )
    } 
}