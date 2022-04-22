import "./DisplayPosts.css";

function DisplayPosts(props) {
  return (
    <div className="app__component rounded-border newest-first">
      {props.children}
    </div>
  );
}

export default DisplayPosts;
