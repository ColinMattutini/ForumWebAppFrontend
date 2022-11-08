import React, { Fragment } from "react";
import classes from './Modal.module.css';
import ReactDOM from "react-dom";


const ModalCard = (props) => {
    return(
    
    <div className={classes.modalChange}>       
            {props.children}
    </div>
    )
}

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.hidePostModalHandler}>
            
        </div>
        
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<ModalCard>{props.children}</ModalCard>, portalElement)}
            {ReactDOM.createPortal(<Backdrop hidePostModalHandler={props.hidePostModalHandler}/>, portalElement)}
        </Fragment>
    );

}

export default Modal;