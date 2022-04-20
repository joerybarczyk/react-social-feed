import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import DisplayPosts from './components/DisplayPosts/DisplayPosts';
import './App.css';
import React, { useState } from 'react';

function App() {

  const samplePosts = [
    {author: "David Lagrange", message: "I recently went into the woods to search for the oldest tree I could find. To my luck I found a very old hemlock around 200 - 250 years old.Let me know if you would like me to show it to you!", status: null},
    {author: "JJ Vega", message: "Its April Fools Day! Give this a dislike if you really like it. :)", status: null},
    {author: "Nevin Seibel", message: "My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain", status: null}
  ]

  const [posts, setPosts] = useState(samplePosts)

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <DisplayPosts posts={posts} />
      </div>
    </div>
  );
}

export default App;
