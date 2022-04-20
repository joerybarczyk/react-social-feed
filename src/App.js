import NavBar from './components/NavBar/NavBar';
import DisplayPosts from './components/DisplayPosts/DisplayPosts';
import CreatePost from './components/CreatePost/CreatePost';

import './App.css';
import React, { useState } from 'react';
function App() {

  const samplePosts = [
    {author: "David Lagrange", message: "I recently went into the woods to search for the oldest tree I could find. To my luck I found a very old hemlock around 200 - 250 years old.Let me know if you would like me to show it to you!", status: null, date: "4/19/2022, 3:00 PM"},
    {author: "JJ Vega", message: "Its April Fools Day! Give this a dislike if you really like it. :)", status: null, date: "4/19/2022, 3:00 PM"},
    {author: "Nevin Seibel", message: "My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain", status: null, date: "4/19/2022, 3:00 PM"}
  ]

  const [posts, setPosts] = useState(samplePosts)

  const addNewPost = function(post) {
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
    console.log(posts.map(x => JSON.stringify(x)))
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
