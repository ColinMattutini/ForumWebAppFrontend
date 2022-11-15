import { Fragment } from "react";
import Header from "../components/Header/Header";
import AllPosts from "../components/Post/AllPosts";
import CreatePost from "../components/Post/CreatePost/CreatePost";


const FitnessPage = () => {

    return(
        <Fragment>
            <Header />
            <AllPosts topicName={"Fitness"}/>
        </Fragment>
    )
}

export default FitnessPage;