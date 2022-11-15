import { Fragment } from "react";
import Header from "../components/Header/Header";
import AllPosts from "../components/Post/AllPosts";


const PaintingPage = () => {

    return(
        <Fragment>
            <Header />
            <AllPosts topicName={"Painting"}/>
        </Fragment>
    )
}

export default PaintingPage;