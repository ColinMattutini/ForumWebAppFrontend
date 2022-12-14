import Modal from "../../../UI/Modal";
import React, { useContext, useRef, useState } from "react";
import classes from "./CreatePost.module.css"
import TopicPostSearch from "./TopicPostSearch";
import AuthContext from "../../../Context/userauth";

const CreatePost = (props) => {
    
    const [topicChoice, setTopicChoice] = useState("");
    const postNameRef = useRef();
    const postDescriptionRef = useRef();

    const authCtx = useContext(AuthContext);

    const topicChoiceHandler = (choice) => {
        setTopicChoice(choice);
    }

    const submitPostFetch = async (postName, postDescription) => {
        const response = await fetch(
            "https://hobby-forum-app.herokuapp.com/api/user/"+localStorage.getItem("email")+"/topic/"+topicChoice+"/post/savepost",
            {
                method:"POST",
                body: JSON.stringify({
                    postName: postName,
                    postDescription: postDescription
                }),
                headers: {'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                }
            }
        )
        if(response.ok){
            props.newPostStateHandler();
        }
        
    }

    const submitPostHandler = (e) => {
        e.preventDefault();
        submitPostFetch(postNameRef.current.value, postDescriptionRef.current.value);
        authCtx.posttimeoutHandler();
        props.hideCreatePostHandler();
    }

    return(
        <Modal>
            <button onClick={props.hideCreatePostHandler}>X</button>
            <form onSubmit={submitPostHandler}>
                <div className={classes.inputholder}>
                    <textarea cols="30" rows="2" placeholder="Post Title" maxLength={200} ref={postNameRef} required></textarea>  
                </div>
                
                <div className={classes.postDescription}>
                    <textarea cols="30" rows="10" placeholder="Post Description" ref={postDescriptionRef} required></textarea>
                </div>
                <TopicPostSearch topicChoiceHandler={topicChoiceHandler}/>
                <div className={classes.submitButton}>
                    <button disabled={authCtx.postActionTimeout}>Submit</button> 
                </div>
            </form>
        </Modal>
    )

}

export default CreatePost;