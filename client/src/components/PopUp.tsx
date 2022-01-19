import React from 'react';
import ReactDOM from 'react-dom';
// import classes from './styles/PopUp.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledBackdrop, StyledPopUp } from './styles/PopUp.styled';

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

const dropIn = {
    hidden: {
        y: '-100vh',
        x: '50%',
        opacity: 0,
    },
    visible: {
        y: '50%',
        x: '50%',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100vh',

        opacity: 0,
    },
};

const Backdrop = (props: IBackDrop) => {
    return (
        <StyledBackdrop>
            <motion.div
                // className={classes.backdrop}
                onClick={props.onClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        </StyledBackdrop>
    );
};

const PopUp = (props: IPopUp) => {
    return (
        <StyledPopUp>
            <motion.div
                className={`${props.className}`}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={e => e.stopPropagation()}
            >
                {props.children}
            </motion.div>
        </StyledPopUp>
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
                <PopUp className={props.className}>{props.children} </PopUp>,
                portalElement
            )}
        </React.Fragment>
    );
};

export default ModalOverlay;
