import Post from "../Post/Post";

function DisplayPosts(props) {
  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <div key={index}>
            <Post updatePost={props.updatePost} postId={index} post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayPosts;
