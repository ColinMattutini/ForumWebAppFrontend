import React, { Fragment } from "react";
import classes from './Modal.module.css';
import ReactDOM from "react-dom";


const ModalCard = (props) => {
    return(
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop}>
        </div>
        
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<ModalCard>{props.children}</ModalCard>, portalElement)}
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
        </Fragment>
    );

}

export default Modal;