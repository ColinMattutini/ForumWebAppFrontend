import Modal from "../../UI/Modal";
import React, { useEffect, useState } from "react";
import classes from "./IndividualPost.module.css";
import Comment from "../Comment/Comment";
import PostScore from "./PostScore";


const IndividualPost = (props) => {

  const [commentCount, setCommentCount] = useState(0);
  const [noCommentDisplay, setNoCommentDisplay] = useState(false);

  const commentCounterHandler = (comments) => {
    setCommentCount(comments);
    if(comments === 0){
      setNoCommentDisplay(true);
    }
  }
    
    useEffect(() => {
        function handleEscapeKey(e) {
          if (e.code === 'Escape') {
            props.hidePostModalHandler();
          }
        }
      
        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
      }, [])
    
    

    return(
        
            <Modal hidePostModalHandler={props.hidePostModalHandler}>
                <div className={classes.buttonDisplay}>
                    <button onClick={props.hidePostModalHandler}>X</button>
                </div>
                <div className={classes.postHeader}>
                    {/* Username of  poster */}
                    <h1>{props.postName}</h1>
                    <h3>{props.postDescription}</h3>
                    <div className={classes.footeralign}>
                      <div className={classes.commentcount}>
                      <h2>{commentCount} comments</h2>
                      </div>
                      <div className={classes.scorealign}>
                        <PostScore postId={props.postId}/>
                      </div>
                    </div>
                    
                    
                </div>
                <hr></hr>
                <div className={classes.nocommentalign}>
                  {noCommentDisplay && <h1>No Comments Yet!</h1>}
                </div>
                <Comment 
                  postId={props.postId}
                  commentCounterHandler={commentCounterHandler}
                />
            </Modal>
        
      
    )

} 

export default IndividualPost;