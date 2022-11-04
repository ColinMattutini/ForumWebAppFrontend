import Modal from "../../UI/Modal";
import React, { useState } from "react";


const IndividualPost = (props) => {

    const [comment, setComment] = useState("");

    const fetchComments = async () => {
        const response = await fetch(
            "http://localhost:8080/api/post/1/comments"
        )

        const data = await response.json();
        setComment(data[0].comment);
    }

    return(
        <Modal>
            <h1>{props.postName}</h1>
            <h2>{comment}</h2>
            <button onClick={fetchComments}>Fetch comments</button>
        </Modal>
    )

} 

export default IndividualPost;