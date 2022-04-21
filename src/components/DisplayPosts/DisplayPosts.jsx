import { useState } from "react";
import { Form } from "react-bootstrap";
import Post from "../Post/Post";
import "./DisplayPosts.css";

function DisplayPosts(props) {
  const [displayOrder, setDisplayOrder] = useState("newest-first");

  function handleChange(event) {
    setDisplayOrder(event.target.value);
  }

  return (
    <div>
      <div className="display-order">
        <Form.Select onChange={handleChange}>
          <option value="newest-first">Newest to Oldest</option>
          <option value="oldest-first">Oldest to Newest</option>
        </Form.Select>
      </div>
      <div className={displayOrder}>
        {props.posts.map((post, index) => {
          return (
            <div key={index}>
              <Post updatePost={props.updatePost} postId={index} post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayPosts;
