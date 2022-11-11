import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({ 
    isLoggedIn: false,
    loginModal: false,
    postActionTimeout: false,
    commentActionTimeout: false,
    logout: () => {},
    login: () => {},
    showLoginModal: () => {},
    hideLoginModal: () => {},
    posttimeoutHandler: () => {},
    commentTimeoutHandler: () => {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [postActionTimeout, postSetActionTimeout] = useState(false);
    const [commentActionTimeout, setCommentActionTimeout] = useState(false);
    

    const logoutHandler = () => {        
        localStorage.clear();
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        setIsLoggedIn(true);
    }

    const loginModalHandler = () => {
        setShowLoginModal(true);
    }

    const hideLoginHandler = () => {
        setShowLoginModal(false);
    }

    const posttimeoutHandler = () => {
        postSetActionTimeout(true);
        setTimeout(() => {
           
            postSetActionTimeout(false);
         }, 1000)
    }

    const commentTimeoutHandler = () => {
        setCommentActionTimeout(true);
        setTimeout(() => {
           
            setCommentActionTimeout(false);
         }, 5000)
    }

    const contextValue = {
        isLoggedIn: isLoggedIn,
        loginModal: showLoginModal,
        postActionTimeout: postActionTimeout,
        commentActionTimeout: commentActionTimeout,
        logout:logoutHandler,
        login:loginHandler,
        showLoginModal:loginModalHandler,
        hideLoginModal:hideLoginHandler,
        posttimeoutHandler: posttimeoutHandler,
        commentTimeoutHandler: commentTimeoutHandler
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContext;