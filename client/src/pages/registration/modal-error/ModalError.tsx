import ModalOverlay from '../../../components/PopUp';
import classes from './styles/ModalError.module.css';
import { MdOutlineError } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import Button from '../../../components/Button';
import React from 'react';
import { Link } from 'react-router-dom';

interface IModalError {
    onBackdropClick: (event: React.FormEvent) => void;
    onCloseModal: (event: React.FormEvent) => void;
}
const ModalError = (props: IModalError) => {
    return (
        <ModalOverlay onBackdropClick={props.onBackdropClick}>
            <div className={classes.modal_content}>
                <div className={classes.error}>
                    <MdOutlineError id={classes.error_icon} />
                    <RiCloseFill
                        id={classes.close_icon}
                        onClick={props.onCloseModal}
                    />
                </div>
                <div className={classes.error_message}>
                    <p className={classes.main_message}>Erro de autenticação</p>
                    <p className={classes.second_message}>
                        Tente novamente mais tarde
                    </p>
                    <Link to="/">
                        <Button className={classes.button}>Home</Button>
                    </Link>
                </div>
            </div>
        </ModalOverlay>
    );
};

export default ModalError;
