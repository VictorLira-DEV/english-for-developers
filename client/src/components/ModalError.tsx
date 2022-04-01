import ModalOverlay from './PopUp';
// import classes from './styles/ModalError.module.css';
import { MdOutlineError } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import Button from './Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledModalError } from './styles/ModalError,styled';

interface IModalError {
    onBackdropClick: (event: React.FormEvent) => void;
    onCloseModal: (event: React.FormEvent) => void;
    title: string;
    message: string;
    btnText: string;
}
const ModalError = (props: IModalError) => {
    const { message, btnText, title, onBackdropClick, onCloseModal } = props;

    return (
        <ModalOverlay onBackdropClick={onBackdropClick}>
            <StyledModalError>
                <div className="error">
                    <MdOutlineError id="error_icon" />
                    <RiCloseFill id="close_icon" onClick={onCloseModal} />
                </div>
                <div className="error_message">
                    <p className="main_message"> {title} </p>
                    <p className="second_message">{message}</p>
                    <Link to="/">
                        <Button className="button"> {btnText} </Button>
                    </Link>
                </div>
            </StyledModalError>
        </ModalOverlay>
    );
};

export default ModalError;
