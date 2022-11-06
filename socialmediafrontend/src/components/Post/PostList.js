import React, { Fragment, useEffect, useState } from 'react';
import Card from '../../UI/Card';
import Modal from '../../UI/Modal';
import IndividualPost from './IndividualPost';

const PostList = (props) => {

    const [showPostModal, setShowPostModal] = useState(false);

    

    const showPostModalHandler = () => {
        setShowPostModal(true);
    }

    const hidePostModalHandler = () => {
        setShowPostModal(false);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = showPostModal ? 'hidden' : 'auto';
      }, [showPostModal])

    return(
        <Fragment>
            {showPostModal && <IndividualPost 
                hidePostModalHandler = {hidePostModalHandler}
                postName = {props.postName}
                postDescription = {props.postDescription}
                postId = {props.postId}
            />}
            <Card onClick={showPostModalHandler}>
                <p>{props.postUser}</p>
                <p>{props.postTopic}</p>
                <h1>{props.postName}</h1>
                <h3>{props.postDescription}</h3>
            </Card>
        </Fragment>

    )

}

export default PostList;