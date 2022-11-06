import Modal from "../../UI/Modal";
import React, { useState } from "react";
import classes from "./IndividualPost.module.css";
import Comment from "../Comment/Comment";
import PostScore from "./PostScore";


const IndividualPost = (props) => {

    

    return(
        
            <Modal hidePostModalHandler={props.hidePostModalHandler}>
                <div className={classes.buttonDisplay}>
                    <button onClick={props.hidePostModalHandler}>X</button>
                </div>
                <div className={classes.postHeader}>
                    {/* Username of  poster */}
                    <h1>{props.postName}</h1>
                    <h3>{props.postDescription}</h3>
                    {/* post score on bottom right positive and negative */}
                    <PostScore postId={props.postId}/>
                    
                </div>
                
                <Comment postId={props.postId}/>
            </Modal>
        
      
    )

} 

export default IndividualPost;