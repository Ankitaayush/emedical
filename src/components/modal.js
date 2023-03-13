import React, { Fragment } from "react";
import ReactDOM  from "react-dom";

// import classes from '../public/model.module.css'
import classes from '../public/modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={`${classes.backdrop} ${props.backdrop}`} onClick={props.onClose}></div>
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
        <div className={`${classes.modal} ${props.className}`} style={props.style}>
            <header className={`${classes.modal__header} ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>

            <form onSubmit={props.onSubmit ? props.onSubmit : (event => event.preventDefault()) }>
                <div className={`${classes.modal__content} ${props.contentClass}`}>
                    {props.children}
                </div>

            </form>
            {props.footer && <footer className={`${classes.modal__footer} ${props.footerClass}`}>
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