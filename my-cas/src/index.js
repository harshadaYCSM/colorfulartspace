import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Posts from './posts';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import {
  PinterestShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestIcon,
  FacebookMessengerIcon,
} from "react-share";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home'
import Contact from './contact'
import About from './about'

class ArtPost extends React.Component {
  constructor() {
    super();
  }
 
  render() {
    let postContent
    if (this.props.isVideo){
      postContent = (<video autoplay loop><source src={this.props.src} type="video/mp4"></source></video>)
    }
    else {
      postContent = (<img src={this.props.src}></img>)
    }
    return(
      <div class="artPost">
        <h3>{this.props.title}</h3>
        {postContent}
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
      <i class="fa fa-thumbs-up"> Like    </i>
      <WhatsappIcon size={20} round={true} />
      <FacebookMessengerIcon size={20} round={true} />
      <PinterestIcon size={20} round={true} />
    </div>
    )
  }
}



class NavigationBar extends React.Component {

  render() {
    return (
      <div class="navigationBar">
                <Router>
                <Link to="/"><h3>Home</h3></Link>    
                <Link to="/"><h3>Contact</h3></Link>
                <Link to="/"><h3>About</h3></Link>
                <Link to="/"><h3>Categories</h3></Link>   
                <Route path="/home" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
        </Router>
      </div>
    )
  }
}

class PostsContainer extends React.Component {
  constructor() {
    super();
    this.postsArray =[];
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
        <ArtPost src={item.src} title={item.title} isVideo={item.isVideo}/>
      )
    })
  }

  render() {
    return (<div class="headerImage">
      <div class="headerTextContainer">
      <h1>Colorful Art Space</h1>
      <h2>by Harshada</h2>
      <NavigationBar />
      </div>
      <div id="actualPostDiv">
      {this.renderPosts()}
      </div>
    </div>)
  }
} 

const bodyContainer = (
  <div> 
    <PostsContainer />
  </div>
)
ReactDOM.render(bodyContainer, document.getElementById('root'));