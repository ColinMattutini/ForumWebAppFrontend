import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/userauth';
import Login from '../../UserAuthentication/Login';
import SignUpForm from '../../UserAuthentication/SignupForm.js';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.css';

const Header = () => {

    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    // const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    // const showLoginModalHandler = () => {
    //     setShowLogin(true);
    // }

    // const hideLoginModalHandler = () => {
    //     setShowLogin(false);
    // }

    const showSignUpModalHandler = () => {
        setShowSignUp(true);
    }

    const hideSignupModalHandler = () => {
        setShowSignUp(false);
    }

    const homepageNav = () => {
        navigate("");
    }

    useEffect(() => {

    }, [authCtx.isLoggedIn])

    return(
        <div>
        {authCtx.loginModal && <Login showSignUpModalHandler={showSignUpModalHandler}/>}
        {showSignUp && <SignUpForm hideSignupModalHandler={hideSignupModalHandler} />}
        <header className={classes.header}>
                <h1 onClick={homepageNav}>Hobby Forum</h1>
                
                <SearchBar />
                
                
                    <div className={classes.buttonSignup}>
                        {!authCtx.isLoggedIn && <button onClick={showSignUpModalHandler}>Sign Up</button>}
                    </div>
                    <div className={classes.buttonLogin}>
                    {!authCtx.isLoggedIn && <button onClick={authCtx.showLoginModal}>Log in</button>}
                {authCtx.isLoggedIn && <button onClick={authCtx.logout}>Logout</button>}
                </div>
        </header>
        </div>

    );

};

export default Header;