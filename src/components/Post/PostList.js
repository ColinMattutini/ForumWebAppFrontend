import React, { Fragment, useEffect, useState } from 'react';
import Card from '../../UI/Card';
import DeletePostModal from '../Profile/DeletePostModal';
import IndividualPost from './IndividualPost';
import classes from "./PostList.module.css";

const PostList = (props) => {

    const [showPostModal, setShowPostModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const showPostModalHandler = () => {
        setShowPostModal(true);
    }

    const hidePostModalHandler = () => {
        setShowPostModal(false);
    }

    const deleteModalHandler = () => {
        showDeleteModal ? setShowDeleteModal(false) : setShowDeleteModal(true);
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
            {showDeleteModal && <DeletePostModal postId = {props.postId} deleteModalHandler={deleteModalHandler}/>}
            <div className={classes.deleteButton}>
            {props.deleteState && <button onClick={deleteModalHandler}>Delete</button>}
            </div>
            <div className={classes.cardSpacing}>
                <Card onClick={showPostModalHandler}>
                    <div className={classes.postHeader}>
                        <div className={classes.spacing}>
                            <p>By: {props.postUser}</p>
                        </div>
                            <p>Topic: {props.postTopic}</p>
                        <div className={classes.score}>
                            <p>{props.postPositiveScore}↑ </p>
                            <p>{props.postNegativeScore}↓</p>
                        </div>
                    </div>
                    <h1>{props.postName}</h1>
                    <h3>{props.postDescription}</h3>
                </Card>
            </div>
        </Fragment>

    )

}

export default PostList;