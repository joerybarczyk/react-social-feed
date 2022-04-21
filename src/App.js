import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import DisplayPosts from './components/DisplayPosts/DisplayPosts';
import CreatePost from './components/CreatePost/CreatePost';
import './App.css';


function App() {

  const samplePosts = require('./samplePosts.json');

  const [posts, setPosts] = useState(samplePosts)

  const addNewPost = function(post) {
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }

  const updatePost = function(postIndex, updatedPost) {
    setPosts([...posts.slice(0,postIndex), updatedPost, ...posts.slice(postIndex+1)])
  }

  return (
    <div className='blue-background'>
      <NavBar />
      <div className='spacer'>
      </div>
      <div className="centered">
        <div className='content-section'>
          <CreatePost addNewPost={addNewPost}/>
        </div>
        <div className="content-section">
          <DisplayPosts  updatePost={updatePost} posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
