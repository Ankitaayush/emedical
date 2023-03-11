import React, { Fragment } from "react";
import ReactDOM  from "react-dom";

import classes from '../public/model.module.css'
import '../public/modal.css'

const Backdrop = (props) => {
    return (
        <div className={`classes.backdrop backdrop`} onClick={props.onClose}></div>
    );
}

// const ModleOverlay = (props) => {
//     return (
//         <div className={classes.content}>
//              {props.children} 
//         </div>
//     );
// }

const ModalOverlay = props => {

    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>

            <form onSubmit={props.onSubmit ? props.onSubmit : (event => event.preventDefault()) }>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>

            </form>
            {props.footer && <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
            </footer>}
        </div>
    );

    return content;
    // return ReactDOM.createPortal(content,document.getElementById('modal-hook'));
}

const Model = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose= {props.onClose} />,document.getElementById('overlay'))}
            {ReactDOM.createPortal(<ModalOverlay {...props} >{props.children}</ModalOverlay>,document.getElementById('overlay'))}
            {/* {ReactDOM.createPortal(<ModleOverlay>{props.children}</ModleOverlay>,document.getElementById('overlay'))} */}
        </Fragment>
    );
}


export default Model;