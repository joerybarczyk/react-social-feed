import React, { useState } from 'react';
import './Post.css'

function Post(props) {

    const [post, setPost] = useState(props.post)

    const setStatusLiked = () => {
        if (post.status == "liked") {
            setPost({
                author: post.author,
                message: post.message,
                status: null
            });
        } else {
            setPost({
                author: post.author,
                message: post.message,
                status: "liked"
            });
        }
    }

    const setStatusDisliked = () => {
        if (post.status == "disliked") {
            setPost({
                author: post.author,
                message: post.message,
                status: null
            });
        } else {
            setPost({
                author: post.author,
                message: post.message,
                status: "disliked"
            });
        }
    }


    return ( 
        <div className='body'>
            <h3>{post.author}</h3>
            <p>{post.message}</p>
            <button className={post.status != "liked" ? "button" : "button--liked"} onClick={setStatusLiked}>Like</button>
            <button className={post.status != "disliked" ? "button" : "button--disliked"} onClick={setStatusDisliked}>Dislike</button>
        </div>
     );
}

export default Post;