import React, { Fragment, useEffect, useState } from 'react';
import Card from '../../UI/Card';
import IndividualPost from './IndividualPost';
import classes from "./PostList.module.css";

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
            <div className={classes.cardSpacing}>
                <Card onClick={showPostModalHandler}>
                    <div className={classes.postHeader}>
                        <p>Posted By: {props.postUser}</p>
                        <p>Topic: {props.postTopic}</p>
                    </div>
                    <h1>{props.postName}</h1>
                    <h3>{props.postDescription}</h3>
                </Card>
            </div>
        </Fragment>

    )

}

export default PostList;