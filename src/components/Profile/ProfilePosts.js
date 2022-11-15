import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/userauth";
import Header from "../Header/Header";
import AllPosts from "../Post/AllPosts";
import PostList from "../Post/PostList";
import DeletePostModal from "./DeletePostModal";
import classes from "./ProfilePosts.module.css";
const ProfilePosts = (props) => {
    
    const authCtx = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    
    const [deleteState, setDeleteState] = useState(false);
    const [newPostState, setNewPostState] = useState(0);

    const newPostStateHandler = () => {
        let i = 1;
        setNewPostState(i);
    }

    const deleteStateHandler = () => {
        deleteState ? setDeleteState(false): setDeleteState(true);
    }

    

    const fetchAllPosts = async () => {
        try
            {
                const response = await fetch (
                    "https://hobby-forum-app.herokuapp.com/api/user/"+localStorage.getItem("email")+"/posts",
                )
            const data = await response.json();            
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
        <Fragment key={post.postId}>            
            
            
            <PostList 
                key={post.postId}
                postId={post.postId}
                postTopic={post.postTopic}
                postUser={post.postUser}
                postName={post.postName}
                postDescription={post.postDescription}
                postPositiveScore={post.postPositiveScore}
                postNegativeScore={post.postNegativeScore}
                deleteState={deleteState}
            />
        </Fragment>
        );
       
    useEffect(() => {
        fetchAllPosts();
        
            if(localStorage.getItem("token") !== null){
                authCtx.login();
            }
    }, [newPostState])

    return(
        <Fragment>
        
        <div className={classes.profilepage}> 
        
            <div className={classes.cardEdit}> 
                <div className={classes.deleteStateButton}>
                    {!deleteState && <button onClick={deleteStateHandler}>Delete A Post</button>}
                    {deleteState && <button onClick={deleteStateHandler}>Cancel</button>}
                </div>
                {postList}
            </div>
        </div>
        </Fragment>
    )
}

export default ProfilePosts;