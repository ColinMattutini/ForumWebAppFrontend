import React, { useState } from "react";
import CommentList from "./CommentList";

const Comment = (props) => {

    const [comment, setComment] = useState([]);

    const fetchComments = async () => {
        const response = await fetch(
            "http://localhost:8080/api/post/"+ props.postId +"/comments"
        )

        const data = await response.json();
        const loadedComments = [];
        for(const commentKey in data){
            loadedComments.push({
                commentId: data[commentKey].commentId,
                comment: data[commentKey].comment,
                username: data[commentKey].appUser.username
                
            })
        }
        setComment(loadedComments);
    }

    const commentList = comment.map((comments) =>
        <CommentList
            key={comments.commentId}
            commendId={comments.commentId}
            comment={comments.comment}
            username={comments.username}
            
        />
        );

    return(
        <div>
            {/* commenter name */}
            {commentList}
            <button onClick={fetchComments}>Fetch comments</button>
        </div>
    )

}

export default Comment;