import React, { useContext, useRef } from "react";
import AuthContext from "../../Context/userauth";
import classes from "./CreateComment.module.css";

const CreateComment = (props) => {

    const commentText = useRef();
    const formRef = useRef();
    const authCtx = useContext(AuthContext);

    const postCommentFetch = (comment) => {
        fetch(
            "http://localhost:8080/api/user/"+localStorage.getItem("email")+"/post/"+props.postId+"/comment/newcomment",
            {
                method: "POST",
                body: JSON.stringify({
                    comment: comment
                }),
                headers: {
                    "Authorization": "Bearer "+localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    const submitComment = e => {
        e.preventDefault();

        if(commentText.current.value.replace(' ', '') !== ''){
            // postCommentFetch(commentText.current.value);
        }
        authCtx.commentTimeoutHandler();
        formRef.current.reset();
        console.log("Comment Timer");
    }

    return(
        <div>
            <form onSubmit={submitComment} ref={formRef}>
                <div className={classes.createcomment}>
                    <label>Post A Comment!</label>
                    <textarea cols="100" rows="4" placeholder="Comment Here" ref={commentText} required/>
                
                <div className={classes.submitButton}>
                    <button disabled={authCtx.commentActionTimeout}>Submit</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default CreateComment;