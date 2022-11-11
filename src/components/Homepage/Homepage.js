import React, { Fragment } from 'react';
import AllPosts from '../Post/AllPosts';
import FavoriteTopics from '../Topic/FavoriteTopics';
import classes from "./Homepage.module.css";

const Homepage = () => {
    return(
        <Fragment>
            
            <div className={classes.homepage}>
            {/* <FavoriteTopics /> */}
                    <AllPosts topicName={"all"}/>
                
            </div>
        </Fragment>
    )
}

export default Homepage;