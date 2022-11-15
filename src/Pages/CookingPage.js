import { Fragment } from "react";
import Header from "../components/Header/Header";
import AllPosts from "../components/Post/AllPosts";


const CookingPage = () => {

    return(
        <Fragment>
            <Header />
            <AllPosts topicName={"Cooking"}/>
        </Fragment>
    )
}

export default CookingPage;