import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/userauth";
import LoginModal from "../UI/LoginModal";
import classes from "./Login.module.css";

const Login = (props) => {

    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const userLogin = (email, password) => {
        fetch(
            // 'https://hobby-forum.herokuapp.com/api/login',
            "http://localhost:8080/api/login",
            {
                method: 'POST',
                headers: {
                    
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    username: email,
                    password: password
                })

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
                    // alert(errorMessage);
                    throw new Error(errorMessage);
                    });
                  }
                }).then(data => {
                  console.log("Worked!");
                  console.log(data);
                //   authCtx.login(data.access_token, data.username);
                localStorage.setItem("token", data.access_token);
                  localStorage.setItem("email", data.email);
                 authCtx.login();
                  
                  //authCtx.id(data.username);
                //   navigate('/homepage');
                  
                 
                })
                  .catch(error => {
                      alert('Something went wrong');
                });
                
            };

    const onLogin = e => {
        e.preventDefault();
        userLogin(email.current.value, password.current.value);
        authCtx.hideLoginModal();
        navigate("");
    }

    const switchToSignup = () => {
        authCtx.hideLoginModal();
        props.showSignUpModalHandler();
    }

    return(
    
    <LoginModal>
        <div className={classes.closeButton}>
            <button onClick={authCtx.hideLoginModal}>X</button>
        </div>
        <form onSubmit={onLogin} className={classes.login}>
                <h1>Login</h1>
                <div className={classes.signupControl}>
                <label htmlFor='email'></label>
                <input 
                placeholder="Email"
                    type='text'
                    ref={email}
                    
                />
                <label htmlFor='password'></label>
                <input 
                    placeholder="Password"
                    type='password'
                    ref={password}
                />                
                    <button>Login</button>
                <p onClick={switchToSignup}>Don't have an account? Sign-up here!</p>
                </div>
                
            </form>
            
            </LoginModal>
    
    )
}

export default Login;