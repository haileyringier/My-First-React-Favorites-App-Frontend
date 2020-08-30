import React from 'react';
import './App.css';
import FavoritesList from './FavoritesList';
import PictureSection from './PictureSection';

const baseUrl = 'http://localhost:3000/pictures/'

export default class App extends React.Component {
  
  state = {
    pictures: [],
    favorites: []
  }

  componentDidMount() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(response => this.setState({pictures: response}))
  }

  addFavorite = (picture) => {
    if(!this.state.favorites.includes(picture)){
      this.setState({
        favorites: [...this.state.favorites, picture]
      })
    }
  }
  removeFavorite = (picture) => {
    let filtered = this.state.favorites.filter(favorite => favorite !== picture)
      this.setState({
        favorites: filtered
      })
  }
  permanentDelete = (p) => {
    let pictures = this.state.pictures.filter(picture => picture.id !== p.id)
    this.removeFavorite(p)
    this.setState({
      pictures: pictures
    })
    fetch(baseUrl + p.id, {
      method: 'DELETE'
    })
  }
  render() {
  return (
    <div className="App">
      <h1>Favorites</h1>
     <FavoritesList favorites={this.state.favorites} removeFavorite={this.removeFavorite}/>
     <h1>Picture Board</h1>
     <PictureSection 
        pictures={this.state.pictures} 
        addFavorite={this.addFavorite} 
        removePicture={this.permanentDelete}/>
    </div>
  );
}
}

