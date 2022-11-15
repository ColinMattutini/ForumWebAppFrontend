import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import ProfilePosts from "../components/Profile/ProfilePosts";

const ProfilePage = () => {
    return(
        <Fragment>
            <Header />
            <ProfilePosts />
        </Fragment>
    )

}

export default ProfilePage;