import React, { Fragment, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/CreatePost/CreatePost";
import Post from "./components/Post/Post";
import "./App.css";

function App() {
  const samplePosts = require("./samplePosts.json");
  const [posts, setPosts] = useState(samplePosts);

  const addNewPost = function (newPost) {
    newPost["id"] = posts.length;
    let tempPosts = [...posts, newPost];
    setPosts(tempPosts);
  };

  const updatePost = function (updatedPost) {
    setPosts([
      ...posts.slice(0, updatedPost.id),
      updatedPost,
      ...posts.slice(updatedPost.id + 1),
    ]);
  };

  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "140px" }} className="centered">
        <CreatePost addNewPost={addNewPost} />
        <DisplayPosts updatePost={updatePost} posts={posts}>
          {posts.map((post, index) => {
            return (
              <div key={index}>
                <Post updatePost={updatePost} postId={index} post={post} />
              </div>
            );
          })}
        </DisplayPosts>
      </div>
    </>
  );
}

export default App;
