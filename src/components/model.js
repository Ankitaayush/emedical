import React, { Fragment } from "react";
import ReactDOM  from "react-dom";

import classes from '../public/model.module.css'

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    );
}

const ModleOverlay = (props) => {
    return (
        <div className={classes.content}>
             {props.children} 
        </div>
    );
}

const Model = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose= {props.onClose} />,document.getElementById('overlay'))}
            {ReactDOM.createPortal(<ModleOverlay>{props.children}</ModleOverlay>,document.getElementById('overlay'))}
        </Fragment>
    );
}


export default Model;