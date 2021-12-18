import ModalOverlay from '../../../components/pop-up/PopUp';
import classes from './styles/ModalOverlay.module.css';
import { MdCheck } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import Button from '../../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

interface IModalSuccess {
    onCloseModal?: (a: React.FormEvent) => void;
    onBackdropClick: (event: React.FormEvent) => void;
}

const ModalSuccess = (props: IModalSuccess) => {
    return (
        <ModalOverlay onBackdropClick={props.onBackdropClick}>
            <div className={classes.modal_content}>
                <div className={classes.success}>
                    <MdCheck id={classes.success_icon} />
                    <RiCloseFill
                        id={classes.close_icon}
                        onClick={props.onCloseModal}
                    />
                </div>
                <div className={classes.success_message}>
                    <p className={classes.main_message}>Ótimo</p>
                    <p className={classes.second_message}>
                        A sua conta foi criada com sucesso
                    </p>
                    <Link to="/">
                        <Button className={classes.button}>
                            Comece explorar
                        </Button>
                    </Link>
                </div>
            </div>
        </ModalOverlay>
    );
};

export default ModalSuccess;
