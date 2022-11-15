import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

const Comment = (props) => {

    const [comment, setComment] = useState([]);
    const [newCommentCheck, setNewCommentCheck] = useState(0);

    const fetchComments = async () => {
        const response = await fetch(
            "https://hobby-forum-app.herokuapp.com/api/post/"+props.postId+"/comments"
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
        props.commentCounterHandler(loadedComments.length);        
    }

    const newComment = () => {
        let i = 1;
        setNewCommentCheck(i);
    }

    const commentList = comment.map((comments) =>
        <CommentList
            key={comments.commentId}
            commendId={comments.commentId}
            comment={comments.comment}
            username={comments.username}
            
        />
        );

    useEffect(() => {
        fetchComments();
        
    }, [newCommentCheck])

    return(
        <div>
            <CreateComment postId = {props.postId} newComment={newComment}/>
            {commentList}
        </div>
    )

}

export default Comment;