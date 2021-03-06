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
    props.addNewPost(newPost);
  };

  return (
    <section className="app__component rounded-border">
      <form className="form__body" onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col lg={1}>
              <label className="secondary-text">Name</label>
            </Col>
            <Col lg={9} className="d-flex align-items-center">
              <input
                className="form__name-input rounded-border"
                type="text"
                onChange={(event) => setPostAuthor(event.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={1}>
              <label className="secondary-text">Post</label>
            </Col>
            <Col lg={9}>
              <textarea
                className="form__post-input rounded-border"
                type="text"
                onChange={(event) => setPostMessage(event.target.value)}
              />
            </Col>
            <Col className="d-flex align-items-end">
              <button className="btn btn-primary rounded-border" type="submit">
                Create
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </section>
  );
}

export default CreatePost;
