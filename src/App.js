import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/CreatePost/CreatePost";
import Post from "./components/Post/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const samplePosts = require("./samplePosts.json");
    setPosts(samplePosts);
  }, []);

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
      <main>
        <CreatePost addNewPost={addNewPost} />
        <DisplayPosts updatePost={updatePost} posts={posts}>
          {posts.map((post, index) => {
            return (
              <section key={post.id}>
                <Post post={post} updatePost={updatePost} />
              </section>
            );
          })}
        </DisplayPosts>
      </main>
    </>
  );
}

export default App;
