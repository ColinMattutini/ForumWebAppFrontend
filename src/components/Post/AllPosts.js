import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import classes from './AllPosts.module.css';
import PostList from "./PostList";

const AllPosts = (props) => {

    const [posts, setPosts] = useState([]);
    const [postName, setPostName] = useState("");
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
                    postTopic: data[postKey].topic.topicName
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
        />
        );
       
    useEffect(() => {
        fetchAllPosts();
    }, [])

    const printPosts = () => {
        console.log(posts);
        console.log(postName);
    }

    return(
        <div className={classes.cardEdit}>
            <Card>
                {postList}
            
                <button onClick={fetchAllPosts}>FETCH</button>
                <button onClick={printPosts}>PRINT POSTS</button>
            </Card>
        </div>
    )
}

export default AllPosts;