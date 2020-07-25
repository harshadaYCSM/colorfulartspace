import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Posts from './posts';


class ArtPost extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h3>Miniature Ship</h3>
        <img src={Posts[1]}></img>
        <h3>Bow Arrow</h3>
        <img src={Posts[2]}></img>
      </div>
    )
  }
}

const postsContainer = (<div>
  <h1>Welcome to Colorful Art Space</h1>
  <ArtPost />
</div>)

ReactDOM.render(postsContainer, document.getElementById('root'));