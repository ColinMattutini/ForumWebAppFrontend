import React, { Fragment, useContext } from "react";
import classes from './LoginModal.module.css';
import ReactDOM from "react-dom";
import AuthContext from "../Context/userauth";


const LoginModalCard = (props) => {

    
    return(
    
    <div className={classes.modalChange}>       
            {props.children}
    </div>
    )
}

const LoginBackdrop = (props) => {
    const authCtx = useContext(AuthContext);
    return(
        <div className={classes.backdrop} onClick={authCtx.hideLoginModal}>
            
        </div>
        
    )
}

const portalElement = document.getElementById('overlays');

const LoginModal = (props) => {
const authCtx = useContext(AuthContext);
    return(
        <Fragment>
            {ReactDOM.createPortal(<LoginModalCard>{props.children}</LoginModalCard>, portalElement)}
            {ReactDOM.createPortal(<LoginBackdrop hidePostModalHandler={props.hidePostModalHandler}/>, portalElement)}
        </Fragment>
    );

}

export default LoginModal;