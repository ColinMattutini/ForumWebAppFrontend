import React from "react";
import classes from "./CommentList.module.css";

const CommentList = (props) => {
    return(
        <div className={classes.commentEdit}>
            <p>{props.username}</p>
            <p>
                {props.comment}
            </p>
            <hr></hr>
        </div>
    )

}

export default CommentList;