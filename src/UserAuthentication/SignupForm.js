import React, { Fragment, useContext, useRef, useState } from 'react';
import classes from './SignupForm.module.css';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../UI/LoginModal';
import AuthContext from '../Context/userauth';

const SignUpForm = (props) => {

    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const email = useRef();
    const username = useRef();
    const password = useRef();
    const reenterPassword = useRef();
    const firstName = useRef();
    const lastName = useRef();


    // let validPassword = (password.current.value === reenterPassword.current.value);
    // let validPasswordLength = (password.current.value.length > 7);

    

    // const successSignUpHandler = () => {
    //     setSuccessSignUp(true);
    //     setTimeout(() => {
    //         setSuccessSignUp(false)
    //         navigate('/authpage');
    //      }, 3000)
    // };

    const signUpFetch = (email, username, password, firstName, lastName) => {
        fetch(
            'https://hobby-forum.herokuapp.com/api/user/signup',
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
            
            ).then(res => {
                if (res.ok){
                    return res.json();
                  }
                  else{
                    return res.json().then(data => {
                      let errorMessage = 'Authentication Failed';
                      if(data && data.error && data.error.message){
                       errorMessage = data.error.message;
                    } 
                    alert(errorMessage);
                    throw new Error(errorMessage);
                    });
                  }
                }).then(data => {
                //   authCtx.login(data.idToken);
                //   successSignUpHandler();
                  //navigate('/authpage');
                  
                 
                })
                  .catch(error => {
                      alert('Something went wrong');
                });

            };
        

    const submitSignUpHandler = (event) => {
        event.preventDefault();
        // if(validPassword){
        //     if(validPasswordLength){
                signUpFetch(email.current.value, username.current.value, password.current.value, firstName.current.value, lastName.current.value);
        //     } else
        //         {alert('Password Must Be A Minimum of 8 Characters!')}
        //     // props.hideSignUpForm();
        // } else{
        //     alert('Passwords Do Not Match!');
        // };
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
            <button>Sign-Up</button>
            <p onClick={switchToLogin}>Already a Member? Click Here to Login</p>
            </div>
        </form>
        </LoginModal>
      
        </Fragment>

    );

}

export default SignUpForm;