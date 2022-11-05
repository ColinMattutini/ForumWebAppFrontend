import React, { Fragment } from 'react';
import Card from '../../UI/Card';
import Post from '../Post/AllPosts';
import classes from "./Homepage.module.css";

const Homepage = () => {
    return(
        <Fragment>
            <div className={classes.homepage}>
                <Post />
            </div>
        </Fragment>
    )
}

export default Homepage;