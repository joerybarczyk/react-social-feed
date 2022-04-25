import "./DisplayPosts.css";

function DisplayPosts(props) {
  return (
    <section className="app__component rounded-border newest-first">
      {props.children}
    </section>
  );
}

export default DisplayPosts;
