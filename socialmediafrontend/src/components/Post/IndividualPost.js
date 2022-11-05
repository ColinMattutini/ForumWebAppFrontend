import Modal from "../../UI/Modal";
import React, { useState } from "react";
import classes from "./IndividualPost.module.css";
import Comment from "../Comment/Comment";
import PostScore from "./PostScore";


const IndividualPost = (props) => {

    

    return(
        <div className={classes.modalEdit}>
            <Modal >
                <div className={classes.postHeader}>
                    {/* Username of  poster */}
                    <h1>{props.postName}</h1>
                    <h3>{props.postDescription}</h3>
                    {/* post score on bottom right positive and negative */}
                    <PostScore />
                    
                </div>
                
                <Comment postId={props.postId}/>
            </Modal>
        </div>
      
    )

} 

export default IndividualPost;