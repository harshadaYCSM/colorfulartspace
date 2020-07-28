import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Posts from './posts';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';


class ArtPost extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div class="artPost">
        <h3>{this.props.title}</h3>
        <img src={this.props.src}></img>
        <FeedbackPanel />
      </div>
    )
  }
}

class FeedbackPanel extends React.Component {

  handleLike(x) {
    x.classList.toggle("fa-thumbs-down");

  }
  render() {
    return (
    <div class="feedbackPanel">
      <i onclick="handleLike(this)" class="fa fa-thumbs-up"> Like </i>
    </div>
    )
  }
}

class PostsContainer extends React.Component {
  constructor() {
    super();
    this.postsArray =[];
    // let posts = JSON.parse(Posts); 
    this.postLenght = 1;
    
    while(Posts[this.postLenght]) {
      this.postLenght++;
    } 
    for(let i=1;i < this.postLenght; i++) {
      this.postsArray.push(Posts[i])
    }
  }

  renderPosts() {
    return this.postsArray.map((item) => {
      return (
        <ArtPost src={item.src} title={item.title}/>
      )
    })
  }

  render() {
    return (<div class="headerImage">
      <h1>Colorful Art Space</h1>
      <h2>by Harshada</h2>
      {this.renderPosts()}
    </div>)
  }
} 

const bodyContainer = (
  <div> 
    <PostsContainer />
  </div>
)
ReactDOM.render(bodyContainer, document.getElementById('root'));