import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import "./Post.css";

function Post(props) {
  function updateStatus(status) {
    const tempPost = {
      id: props.post.id,
      author: props.post.author,
      message: props.post.message,
      status: status,
      date: props.post.date,
    };
    props.updatePost(tempPost);
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
    <div className="body">
      <Container>
        <Row>
          <Col>
            <h3 className="tertiary-text semibold">{props.post.author}</h3>
          </Col>
          <Col className="d-flex justify-content-end">
            <p style={{ color: "var(--secondary-color)", fontStyle: "italic" }}>
              {props.post.date}
            </p>
          </Col>
        </Row>
        <Row>
          <p>{props.post.message}</p>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <BsHandThumbsUpFill
              size={25}
              className={
                props.post.status !== "liked" ? "button" : "button--liked"
              }
              onClick={setStatus("liked")}
            />
            <BsHandThumbsDownFill
              size={25}
              className={
                props.post.status !== "disliked" ? "button" : "button--disliked"
              }
              onClick={setStatus("disliked")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
