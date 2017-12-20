import React, { Component } from 'react';
import './Track.css';

class SearchResults extends component {
  constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(event) {
        this.props.onAdd(this.props.track);
    }

    removeTrack(event) {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>
        }
        return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }
    
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
            <p><!-- track artist will go here--> | <!-- track album will go here --></p>
          </div>
            <a className="Track-action"><!-- + or - will go here --></a>
      </div>
    );
  }
}

export default Track;
