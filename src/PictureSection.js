import React from 'react'
import PictureCard from './PictureCard.js'

export default function PictureSection(props){

    const showPictures = () => props.pictures.map(picture => {
        return <PictureCard  
                    picture={picture} 
                    clickAction={props.addFavorite} 
                    removePicture={props.removePicture}
                    key={picture.id}/>
    })

    return(
        <ul className="picture-list">
            {showPictures()}
        </ul>
    )
}