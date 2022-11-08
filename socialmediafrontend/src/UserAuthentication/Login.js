import React, { useRef } from "react";
import Modal from "../UI/Modal";
import classes from "./Login.module.css";

const Login = (props) => {

    const email = useRef();
    const password = useRef();

    const userLogin = (email, password) => {
        fetch(
            'http://localhost:8080/api/login',
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
                  localStorage.setItem("username", data.username);
                  //authCtx.id(data.username);
                //   navigate('/homepage');
                  
                 
                })
                  .catch(error => {
                      alert('Something went wrong');
                });

            };

    const onLogin = e => {
        e.preventDefault();
        console.log(email.current.value, password.current.value);
        userLogin(email.current.value, password.current.value);
    }

    return(
    <Modal>
        <button onClick={props.hideLoginModalHandler}>X</button>
        <form onSubmit={onLogin}>
                <div className={classes.signupControl}>
                <label htmlFor='email'>E-Mail</label>
                <input 
                    type='text'
                    ref={email}
                    
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    ref={password}
                />                
                
                {/* <button onClick={props.hideLoginForm}>Close</button> */}
                <button>Cancel</button>
                <p>Don't have an account? Sign-up here!</p>
                </div>
                <button>Submit</button>
            </form>
            
    </Modal>
    )
}

export default Login;