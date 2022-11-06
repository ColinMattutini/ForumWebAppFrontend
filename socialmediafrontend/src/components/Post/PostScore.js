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

    const getScores = () => {
        fetchPositiveScore();
        fetchNegativeScore();
    }

    return(
        <div >
        <div className={classes.format}>
            Post Score Test
            <div className={classes.score}>
                <div className={classes.positivescore}>
                    {positiveScore} positive
                </div>
                {negativeScore} negative
            </div>
           
        </div>
        
        <button onClick={getScores}>Fetch Score</button>
        </div>
    )

}

export default PostScore;