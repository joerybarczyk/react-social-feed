import Post from '../Post/Post';

function DisplayPosts(props) {
    return ( 
        <div>
            {props.posts.map((post, index) => {
                return (
                    <div>
                        <Post updatePost={props.updatePost} postIndex={index} post={post} />
                    </div>
                )
            })}
        </div>
     );
}

export default DisplayPosts;