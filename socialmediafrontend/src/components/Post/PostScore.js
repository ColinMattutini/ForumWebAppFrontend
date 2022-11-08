import React, { useState } from "react";
import classes from "./PostScore.module.css";

const PostScore = (props) => {

    const [positiveScore, setPositiveScore] = useState(0);
    const [negativeScore, setNegativeScore] = useState(0);

    const fetchPositiveScore = async() => {
        const response = await fetch(
            "http://localhost:8080/api/post/"+props.postId+"/positiveScore",

        )
        const data = await response.json();
        setPositiveScore(data);
        console.log(positiveScore);
        console.log(data);
    }

    const fetchNegativeScore = async() => {
        const response = await fetch(
            "http://localhost:8080/api/post/"+props.postId+"/negativeScore",

        )
        const data = await response.json();
        setNegativeScore(data);
        console.log(negativeScore);
        console.log(data);
    }

    const reviewPostFetch = (reviewType) => {
        const response = fetch(
            "http://localhost:8080/api/user/cmmatt14@gmail.com/post/"+props.postId+"/review",
            {
                method: "POST",
                body: JSON.stringify({
                    review: reviewType
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbW1hdHQxNEBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImV4cCI6MTY2Nzc1NzQ2NH0.A-50okYETu_BQ3SR9toqYKvmZ4VIrb41RNh_5D0rziQ'
                },
            }
            
        )
    }

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
        <div >
        <div className={classes.format}>
            Post Score Test
            <div className={classes.score}>
                <div className={classes.positivescore} onClick={positiveReviewPost}>
                    {positiveScore} positive
                </div>
                <div onClick={negativeReviewPost}>
                    {negativeScore} negative
                </div>
            </div>
           
        </div>
        
        <button onClick={getScores}>Fetch Score</button>
        </div>
    )

}

export default PostScore;