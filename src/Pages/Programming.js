import { Fragment } from "react";
import Header from "../components/Header/Header";
import AllPosts from "../components/Post/AllPosts";


const ProgrammingPage = () => {

    return(
        <Fragment>
            <Header />
            <AllPosts topicName={"Programming"}/>
        </Fragment>
    )
}

export default ProgrammingPage;