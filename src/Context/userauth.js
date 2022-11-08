import React from 'react';
import { useState } from 'react';

const AuthContext = React.createContext({ 
    isLoggedIn: false,
    loginModal: false,
    logout: () => {},
    login: () => {},
    showLoginModal: () => {},
    hideLoginModal: () => {}
    
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

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

    const contextValue = {
        isLoggedIn: isLoggedIn,
        loginModal: showLoginModal,
        logout:logoutHandler,
        login:loginHandler,
        showLoginModal:loginModalHandler,
        hideLoginModal:hideLoginHandler
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContext;