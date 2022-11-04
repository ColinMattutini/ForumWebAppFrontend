import React, { Fragment, useState } from 'react';
import Card from '../../UI/Card';
import Modal from '../../UI/Modal';
import IndividualPost from './IndividualPost';

const PostList = (props) => {

    const [showPostModal, setShowPostModal] = useState(false);
    

    const showPostModalHandler = () => {
        setShowPostModal(true);
    }

    

    return(
        <Fragment>
            {showPostModal && <IndividualPost 
                postName = {props.postName}
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