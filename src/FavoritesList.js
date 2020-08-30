import React from 'react'
import PictureCard from './PictureCard.js'

export default function FavoritesList(props){

    const showFavorites = () => props.favorites.map(favorite => {
        return <PictureCard 
                    picture={favorite} 
                    clickAction={props.removeFavorite}
                    key={favorite.id} 
                    favorite/>
    })
    return (
        <ul className='favorites-list'>
            {showFavorites()}
        </ul>
    )
}