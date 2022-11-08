import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../UserAuthentication/Login';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Header.module.css';

const Header = () => {

    const navigate = useNavigate();

    const[showLogin, setShowLogin] = useState(false);

    const showLoginModalHandler = () => {
        setShowLogin(true);
    }

    const hideLoginModalHandler = () => {
        setShowLogin(false);
    }

    const homepageNav = () => {
        navigate("");
    }

    return(
        <div>
        {showLogin && <Login hideLoginModalHandler={hideLoginModalHandler}/>}
        <header className={classes.header}>
          
                <h1 onClick={homepageNav}>Hobby Forum</h1>
                <SearchBar />
                <div>
                <button>Sign Up</button>
                <button onClick={showLoginModalHandler}>Log in</button>
                </div>
        </header>
        </div>

    );

};

export default Header;