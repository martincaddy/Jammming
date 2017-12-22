import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist'
import '../SearchBar/SearchBar'
import '../SearchResults/SearchResults'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };
    //this.addTrack = this.addTrack.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            {/*<Add a SearchBar component>*/}
            <div className="App-playlist">
            <Playlist playlistTracks={this.state.playlistTracks}/>
            <Playlist playlistName={this.state.playlistName}/>
              </div>
            </div>
          </div>
    );
  }
};

export default App;
