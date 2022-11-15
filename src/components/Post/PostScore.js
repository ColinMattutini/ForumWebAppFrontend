import React, { useEffect, useState } from "react";
import classes from "./PostScore.module.css";

const PostScore = (props) => {

    const [positiveScore, setPositiveScore] = useState(0);
    const [negativeScore, setNegativeScore] = useState(0);
    const [isClicked, setIsClicked] = useState(0);
  

    const fetchPositiveScore = async() => {
        const response = await fetch(
            "https://hobby-forum-app.herokuapp.com/api/post/"+props.postId+"/positiveScore",

        )
        const data = await response.json();
        setPositiveScore(data);
        
        
    }

    const fetchNegativeScore = async() => {
        const response = await fetch(
            "https://hobby-forum-app.herokuapp.com/api/post/"+props.postId+"/negativeScore",

        )
        const data = await response.json();
        setNegativeScore(data);
       
        
        
    }

    const reviewPostFetch = async (reviewType) => {
        const response = await fetch(
            "https://hobby-forum-app.herokuapp.com/api/user/"+localStorage.getItem("email")+"/post/"+props.postId+"/review",
            {
                method: "POST",
                body: JSON.stringify({
                    review: reviewType
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+localStorage.getItem("token")
                },
            }
            
        )
        setIsClicked(isClicked+1);
    }
    useEffect(() => {
        getScores();
    }, [isClicked])

    const getScores = () => {
        fetchPositiveScore();
        fetchNegativeScore();
    }

    const positiveReviewPost = () => {
        
        reviewPostFetch("POSITIVE");
    
    }
    const negativeReviewPost = () => {
       
        reviewPostFetch("NEGATIVE");
    
    }

    return(
        <div>
        <div className={classes.format}>
           
            <div className={classes.score}>
                <div className={classes.positivescore} onClick={positiveReviewPost}>
                    {positiveScore} ↑
                </div>
                <div className={classes.negativescore} onClick={negativeReviewPost}>
                    {negativeScore} ↓
                </div>
            </div>
           
        </div>
        
        </div>
    )

}

export default PostScore;