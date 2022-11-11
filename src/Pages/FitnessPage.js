import { Fragment } from "react";
import AllPosts from "../components/Post/AllPosts";
import CreatePost from "../components/Post/CreatePost/CreatePost";


const FitnessPage = () => {

    return(
        <Fragment>
            
            <AllPosts topicName={"Fitness"}/>
        </Fragment>
    )
}

export default FitnessPage;