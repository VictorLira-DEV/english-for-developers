import React from 'react';
import ReactDOM from 'react-dom';
import classes from './styles/PopUp.module.css';

const portalElement = document.getElementById('overlay')!;

interface IPopUp {
    children?: React.ReactNode;
    className?: string;
}

interface IModalOverlay {
    children?: React.ReactNode;
    className?: string;
    onBackdropClick?: (event: React.FormEvent) => void;
}

interface IBackDrop {
    onClick?: (event: React.FormEvent) => void;
}

const Backdrop = (props: IBackDrop) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const PopUp = (props: IPopUp) => {
    return (
        <div className={`${classes.popUp} ${props.className}`}>
            {props.children}
        </div>
    );
};

const ModalOverlay = (props: IModalOverlay) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onBackdropClick} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <PopUp className={props.className}> {props.children} </PopUp>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default ModalOverlay;
