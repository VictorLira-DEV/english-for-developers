import ModalOverlay from './PopUp';
// import classes from './styles/ModalOverlay.module.css';
import { MdCheck } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import Button from './Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledModalSuccess } from './styles/ModalSuccess.styled';

interface IModalSuccess {
    onCloseModal?: (a: React.FormEvent) => void;
    onBackdropClick: (event: React.FormEvent) => void;
    title: string;
    message: string;
    btnText: string;
}

const ModalSuccess = (props: IModalSuccess) => {
    const { btnText, title, message, onBackdropClick, onCloseModal } = props;

    return (
        <ModalOverlay onBackdropClick={onBackdropClick}>
            <StyledModalSuccess>
                <div className="success">
                    <MdCheck id="success_icon" />
                    <RiCloseFill id="close_icon" onClick={onCloseModal} />
                </div>
                <div className="success_message">
                    <p className="main_message"> {title} </p>
                    <p className="second_message">{message}</p>
                    <Link to="/">
                        <Button className="button">{btnText}</Button>
                    </Link>
                </div>
            </StyledModalSuccess>
        </ModalOverlay>
    );
};

export default ModalSuccess;
