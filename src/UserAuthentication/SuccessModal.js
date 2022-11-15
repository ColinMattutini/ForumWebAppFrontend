import React from "react";
import Modal from "../UI/Modal";
import classes from './SuccessModal.module.css';

const SuccessModal = props => {

    return(
        <Modal>
            <div className={classes.centering}>
                <h1>Please check your email for a verification link. After clicking it, please log in.</h1>
                <div className={classes.buttonHolder}>
                    <button onClick={props.successModalHandler}>Close</button>
                </div>
            </div>
        </Modal>
    )
}

export default SuccessModal;