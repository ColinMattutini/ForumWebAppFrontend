import React, { useState } from "react";
import Modal from "../../UI/Modal";
import classes from "./DeletePostModal.module.css"

const DeletePostModal = (props) => {

    const [deleteText, setDeleteText] = useState("");

    let validText = (deleteText === "DELETE");

    const deleteTextHandler = e => {
        setDeleteText(e.target.value);
    }

    const fetchDeletePost = async () => {
        const response = await fetch(
            "https://hobby-forum.herokuapp.com/api/user/"+localStorage.getItem("email")+"/posts/"+props.postId,
            {
                method:"PUT",
                headers:{
                    "Authorization": "Bearer "+localStorage.getItem("token")
                }
            }
        )
        if(response.ok){
            
        }
    }

    const deletePostHandler = () => {
        fetchDeletePost();
        props.deleteModalHandler();
    }

    return(
        <Modal>
            <div className={classes.deleteButton}>
                <button onClick={props.deleteModalHandler}>X</button>
            </div>
            <div className={classes.text}>
                <h1>Are you sure you want to delete this post?</h1>
            </div>
            <div className={classes.inputBox}>
                <label htmlFor="delete">Type: "DELETE" into the box below</label>
                <input 
                    onChange={deleteTextHandler}
                />
            </div>
            <div className={classes.confirmationButtons}>
                
                <div className={classes.yes}>
                    <button disabled={!validText} onClick={deletePostHandler}>Delete Post</button>
                </div>
            </div>
        </Modal>
    )
}

export default DeletePostModal;