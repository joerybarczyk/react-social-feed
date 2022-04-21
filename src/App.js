import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/CreatePost/CreatePost";
import "./App.css";

function App() {
  const samplePosts = require("./samplePosts.json");
  const [posts, setPosts] = useState(samplePosts);

  const addNewPost = function (newPost) {
    newPost["id"] = posts.length;
    let tempPosts = [...posts, newPost];
    setPosts(tempPosts);
  };

  const updatePost = function (postIndex, updatedPost) {
    setPosts([
      ...posts.slice(0, postIndex),
      updatedPost,
      ...posts.slice(postIndex + 1),
    ]);
  };

  return (
    <div className="app__body">
      <NavBar />
      <div style={{ "padding-top": "140px" }} className="centered">
        <CreatePost
          className="app__component rounded-border"
          addNewPost={addNewPost}
        />
        <div className="app__component rounded-border">
          <DisplayPosts updatePost={updatePost} posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
