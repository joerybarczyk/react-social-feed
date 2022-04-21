import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Post.css";

function Post(props) {
  function updateStatus(status) {
    const tempPost = {
      author: props.post.author,
      message: props.post.message,
      status: status,
      date: props.post.date,
    };
    props.updatePost(props.postId, tempPost);
  }

  function setStatus(status) {
    return () => {
      if (props.post.status === status) {
        updateStatus(null);
      } else {
        updateStatus(status);
      }
    };
  }

  return (
    <Container className="body">
      <h3>{props.post.author}</h3>
      <span>
        <p>{props.post.date}</p>
      </span>
      <p>{props.post.message}</p>
      <button
        className={props.post.status !== "liked" ? "button" : "button--liked"}
        onClick={setStatus("liked")}
      >
        Like
      </button>
      <button
        className={
          props.post.status !== "disliked" ? "button" : "button--disliked"
        }
        onClick={setStatus("disliked")}
      >
        Dislike
      </button>
    </Container>
  );
}

export default Post;
