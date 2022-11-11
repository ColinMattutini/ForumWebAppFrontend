import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/userauth";
import Login from "../../UserAuthentication/Login";

import classes from './AllPosts.module.css';
import CreatePost from "./CreatePost/CreatePost";
import PostList from "./PostList";

const AllPosts = (props) => {

    const authCtx = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [showCreatePostModal, setShowCreatePostModal] = useState(false);
    const [newPostState, setNewPostState] = useState(0);

    const showCreatePostHandler = () => {
        if(authCtx.isLoggedIn === true){
            setShowCreatePostModal(true);
        } else{
            authCtx.showLoginModal();
        }
    }

    const hideCreatePostHandler = () => {
        setShowCreatePostModal(false);
    }

    const newPostStateHandler = () => {
        let i = 1;
        setNewPostState(i);
    }

    const fetchAllPosts = async () => {
        try
            {
                const response = await fetch (
                "http://localhost:8080/api/topic/"+props.topicName+"/posts",
                
            )
            const data = await response.json();
            console.log("Topic posts fetched!");
            
            const postLoad = [];
            for(const postKey in data){
                postLoad.push({
                    postId: data[postKey].postId,
                    postName: data[postKey].postName,
                    postDescription: data[postKey].postDescription,
                    postUser: data[postKey].appUser.username,
                    postTopic: data[postKey].topic.topicName,
                    postPositiveScore: data[postKey].postTotalScore.positiveScoreTotal,
                    postNegativeScore: data[postKey].postTotalScore.negativeScoreTotal
                })
            }

            setPosts(postLoad);
            
            }
        catch(error)
            {
                throw new Error("ERROR RUNNING FETCH");
            }
        }

    const postList = posts.map((post) =>
        <PostList 
            key={post.postId}
            postId={post.postId}
            postTopic={post.postTopic}
            postUser={post.postUser}
            postName={post.postName}
            postDescription={post.postDescription}
            postPositiveScore={post.postPositiveScore}
            postNegativeScore={post.postNegativeScore}
        />
        );
       
    useEffect(() => {
        fetchAllPosts();
        
            if(localStorage.getItem("token") !== null){
                authCtx.login();
            }
    }, [newPostState])

    return(
        <Fragment>
        
        {showCreatePostModal && <CreatePost hideCreatePostHandler={hideCreatePostHandler} newPostStateHandler={newPostStateHandler}/>}
        <div className={classes.cardEdit}>
        <div className={classes.createPostButton}>
            <button onClick={showCreatePostHandler}>Create Post</button>
        </div>
                {postList}
           
        </div>
        </Fragment>
    )
}

export default AllPosts;