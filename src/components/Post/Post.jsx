import './Post.css'

function Post(props) {

    const setStatusLiked = () => {
        if (props.post.status === "liked") {
            props.updatePost(
                props.postIndex,
                {
                author: props.post.author,
                message: props.post.message,
                date: props.post.date,
                status: null
            });
        } else {
            props.updatePost(
                props.postIndex,
                {
                author: props.post.author,
                message: props.post.message,
                date: props.post.date,
                status: "liked"
            });
        }
    }

    const setStatusDisliked = () => {
        if (props.post.status === "disliked") {
            props.updatePost(
                props.postIndex,
                {
                author: props.post.author,
                message: props.post.message,
                date: props.post.date,
                status: null
            });
        } else {
            props.updatePost(
                props.postIndex,
                {
                author: props.post.author,
                message: props.post.message,
                date: props.post.date,
                status: "disliked"
            });
        }
    }

    return ( 
        <div className='body'>
            <h3>{props.post.author}</h3>
            <span>
                <p>{props.post.date}</p>
            </span>
            <p>{props.post.message}</p>
            <button className={props.post.status !== "liked" ? "button" : "button--liked"} onClick={setStatusLiked}>Like</button>
            <button className={props.post.status !== "disliked" ? "button" : "button--disliked"} onClick={setStatusDisliked}>Dislike</button>
        </div>
     );
}

export default Post;