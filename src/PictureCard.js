import React from 'react'

export default function PictureCard(props){

    const handleClick = (event) => {
        props.clickAction(props.picture)
    }

    const deleteClick = (event) => {
        event.stopPropagation()
        props.removePicture(props.picture)

    }
    return(
        <li className='picture-card' onClick={handleClick}>
            <p>{props.picture.title}</p>
            <img className='pictures' src={props.picture.url} alt=""></img>
            {!props.favorite ? (
                <button className='delete-button' onClick={deleteClick}>Remove Picture</button>) 
                : null }
        </li>
    )
}