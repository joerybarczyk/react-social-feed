import React, { useState } from 'react';
import './CreatePost.css'

function CreatePost(props) {

    const [postAuthor, setPostAuthor] = useState('');
    const [postMessage, setPostMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let newPost = {
            author: postAuthor,
            message: postMessage,
            status: null,
            date: new Date().toLocaleString()
        }
        console.log(`Post from handleSubmit in CreatePost: ${JSON.stringify(newPost)}`)
        props.addNewPost(newPost)
    }
    
    return ( 
        <form className="form-body" onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-1'>
                    <label className='form__label secondary-color'>Name</label>
                </div>
                <div className='col-8'>
                    <input type="text" onChange={(event) => setPostAuthor(event.target.value)}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>
                    <label className='form__label'>Post</label>
                </div>
                <div className='col-8'>
                    <input type="text" onChange={(event) => setPostMessage(event.target.value)}/>
                </div>
                <div className='col'>
                    <button className='btn btn-primary create' type="submit">Create</button>
                </div>
            </div>
        </form>
     );
}

export default CreatePost;