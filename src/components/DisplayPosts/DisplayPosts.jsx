import React from 'react';
import Post from '../Post/Post';

function DisplayPosts(props) {
    return ( 
        <div className='post-list'>
            {props.posts.map(post => {
                return (
                    <Post post={post} />
                )
            })}
        </div>
     );
}

export default DisplayPosts;