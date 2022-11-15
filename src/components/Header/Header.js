import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/userauth';
import Login from '../../UserAuthentication/Login';
import SignUpForm from '../../UserAuthentication/SignupForm.js';
import SuccessModal from '../../UserAuthentication/SuccessModal';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.css';

const Header = () => {

    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const [showSignUp, setShowSignUp] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const showSignUpModalHandler = () => {
        setShowSignUp(true);
    }

    const hideSignupModalHandler = () => {
        setShowSignUp(false);
    }

    const successModalHandler = () => {
        successModal ? setSuccessModal(false): setSuccessModal(true);
    }

    const homepageNav = () => {
        navigate("/");
    }

    const profilePageNav = () => {
        navigate("/Profile");
    }

    const logoutHandler = () => {
        authCtx.logout();
        navigate("/");
    }

    useEffect(() => {

    }, [authCtx.isLoggedIn])

    return(
        <div>
                {authCtx.loginModal && <Login showSignUpModalHandler={showSignUpModalHandler}/>}
                {showSignUp && <SignUpForm hideSignupModalHandler={hideSignupModalHandler} successModalHandler={successModalHandler}/>}
                {successModal && <SuccessModal successModalHandler={successModalHandler}/>}
        <header className={classes.header}>
                <h1 onClick={homepageNav}>Congathering</h1>                
                    <SearchBar />
                    <div className={classes.buttonSignup}>
                        {!authCtx.isLoggedIn && <button onClick={showSignUpModalHandler}>Sign Up</button>}
                        {authCtx.isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
                    </div>
                    <div className={classes.buttonLogin}>
                    {!authCtx.isLoggedIn && <button onClick={authCtx.showLoginModal}>Log in</button>}
                
                    {authCtx.isLoggedIn && <button onClick={profilePageNav}>Profile</button>}
                </div>
        </header>
        </div>

    );

};

export default Header;