import React, { Component } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import './App.css';
import Spotify from "../../util/Spotify"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: [],
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults });
    });
  }


  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }


  updatePlaylistName(name){
    this.setState({playlistName: name});

  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  addTrack(track) {
    // Find whether the track just passed is in the playlistTracks array or not.
    // .find() returns the value of the first element that satisfies the condition.
    // Otherwise it returns undefined (falsy).
    let inPlaylist = this.state.playlistTracks.find(trackObj => trackObj.id === track.id);
    if (!inPlaylist) {
      // Take the current state (prevState) and .push() the track we want to add.
      // .push() modifies the array and returns the new length of the array.
      // Assign the modified state to playlistTracks and re-render the playlistTracks.
      this.setState(function(prevState, props) {
        prevState.playlistTracks.push(track);
        return {playlistTracks: prevState.playlistTracks}
      });
    }
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                onAdd={this.addTrack} />
                <Playlist playlistTracks={this.state.playlistTracks}
                  onNameChange={this.updatePlaylistName}
                  onRemove={this.removeTrack}
                  onSave={this.savePlaylist} />
              </div>
            </div>
          </div>
    );
  }
}

export default App;
