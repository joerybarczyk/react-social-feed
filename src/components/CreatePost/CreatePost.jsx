import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CreatePost.css";

function CreatePost(props) {
  const [postAuthor, setPostAuthor] = useState("");
  const [postMessage, setPostMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPost = {
      author: postAuthor,
      message: postMessage,
      status: null,
      date: new Date().toLocaleString(),
    };
    console.log(
      `Post from handleSubmit in CreatePost: ${JSON.stringify(newPost)}`
    );
    props.addNewPost(newPost);
  };

  return (
    <form className="form-body" onSubmit={handleSubmit}>
      <Container>
        <Row>
          <Col md={1}>
            <label className="form__label secondary-color">Name</label>
          </Col>
          <Col md={8}>
            <input
              type="text"
              onChange={(event) => setPostAuthor(event.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <label className="form__label">Post</label>
          </Col>
          <Col md={8}>
            <input
              type="text"
              onChange={(event) => setPostMessage(event.target.value)}
            />
          </Col>
          <Col>
            <button className="btn btn-primary create" type="submit">
              Create
            </button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default CreatePost;
