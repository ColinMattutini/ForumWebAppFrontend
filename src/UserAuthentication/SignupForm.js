import React, { Fragment, useContext, useRef, useState } from 'react';
import classes from './SignupForm.module.css';
import LoginModal from '../UI/LoginModal';
import AuthContext from '../Context/userauth';

const SignUpForm = (props) => {

    const authCtx = useContext(AuthContext);

    const [loadState, setLoadState] = useState(false);

    const loadStateHandler = () => {
        loadState ? setLoadState(false): setLoadState(true); 
    }

    const email = useRef();
    const username = useRef();
    const password = useRef();
    const reenterPassword = useRef();
    const firstName = useRef();
    const lastName = useRef();

    const signUpFetch = async (email, username, password, firstName, lastName) => {
        const response = await fetch(
            'https://hobby-forum-app.herokuapp.com/api/user/signup',
            {
                method: 'POST',
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    password: password,

                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            ) 
            if(response.ok){
                props.successModalHandler();
                loadStateHandler();
                props.hideSignupModalHandler();
            }
        }
        

    const submitSignUpHandler = (event) => {
        event.preventDefault();
        loadStateHandler();
        signUpFetch(email.current.value, username.current.value, password.current.value, firstName.current.value, lastName.current.value);

    };

    const switchToLogin = () => {
        props.hideSignupModalHandler();
        authCtx.showLoginModal();
        
    }

   

    return(
        <Fragment>
            <LoginModal>
            <div className={classes.closeButton}>
                <button onClick={props.hideSignupModalHandler}>X</button>
            </div>

            <form onSubmit={submitSignUpHandler} className={classes.login}>
                <div className={classes.signupControl}>
                <h1>Sign-Up</h1>
                <input placeholder="First Name" 
                    ref={firstName}
                    required
                />
                <input placeholder="Last Name" 
                    ref={lastName}
                    required
                />
                <input  placeholder="Email"
                    type='email'
                    ref={email}
                    required
                />
                <input placeholder="Username"
                    ref={username}
                    required
                />
                <input type='password' placeholder="Password: Enter 8 characters or more"
                    ref={password}
                    required
                />
                <input type='password' placeholder="Re-Enter Password"
                    ref={reenterPassword}
                    required
                />
                {!loadState && <button>Sign-Up</button>}
                {loadState && <h2>Loading...</h2>}
                <p onClick={switchToLogin}>Already a Member? Click Here to Login</p>
                </div>
            </form>
            </LoginModal>
        </Fragment>

    );

}

export default SignUpForm;