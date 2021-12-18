import Input from '../../components/input/Input';
import classes from './styles/Registration.module.css';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import React, { useState, useEffect } from 'react';
import useInput from '../../hooks/use-input/useInput';
import { useHistory } from 'react-router-dom';
import useAxios from '../../hooks/use-axios/useAxios';
import ModalSuccess from './modal-success/ModalSuccess';
import ModalError from './modal-error/ModalError';

const Registration = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const history = useHistory();
    const { sendRequest, isLoading, hasError } = useAxios();
    console.log(hasError);
    //USERNAME
    const usernameValidation = (value: string) => {
        return {
            isValid: value.trim().length > 7,
            errorMessage: 'Username deve conter pelo menos 8 caracteres',
        };
    };

    const {
        value: enteredUsername,
        isValid: enteredNameIsValid,
        errorMessage: usernameErrorMessage,
        hasError: usernameHasError,
        inputBlurHandler: usernameBlurHander,
        valueChangeHandler: usernameChangeHandler,
        reset: resetNameInput,
    } = useInput(usernameValidation);

    //EMAIL
    const emailValidation = (value: string) => {
        return {
            isValid: value.trim().includes('@'),
            errorMessage: 'E-mail invalido',
        };
    };

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        errorMessage: emailErrorMessage,
        hasError: emailHasError,
        inputBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmailInput,
    } = useInput(emailValidation);

    //PASSWORD
    const passwordValidation = (value: string) => {
        return {
            isValid: value.trim().length > 7,
            errorMessage: 'A senha deve conter pelo menos 8 caracteres',
        };
    };
    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        errorMessage: passwordErrorMessage,
        hasError: passswordHasError,
        inputBlurHandler: passwordBlurHandler,
        valueChangeHandler: passwordChangeHandler,
        reset: resetPasswordInput,
    } = useInput(passwordValidation);

    //PASSWORD CHECK

    const {
        value: enteredPasswordCheck,
        isValid: enteredPasswordCheckIsValid,
        errorMessage: passwordCheckErrorMessage,
        hasError: passwordCheckHasError,
        inputBlurHandler: passwordCheckBlurHandler,
        valueChangeHandler: passwordCheckChangeHandler,
        reset: resetPasswordCheckInput,
    } = useInput(passwordCheckValidation);

    function passwordCheckValidation(value: string) {
        return {
            isValid: value === enteredPassword,
            errorMessage: 'As senhas não são iguais',
        };
    }

    useEffect(() => {
        setFormIsValid(
            enteredPasswordCheckIsValid &&
                enteredPasswordIsValid &&
                enteredEmailIsValid &&
                enteredNameIsValid
        );
    }, [
        enteredPasswordCheckIsValid,
        enteredPasswordIsValid,
        enteredEmailIsValid,
        enteredNameIsValid,
    ]);

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (formIsValid !== true) return;
        // setIsLoading(true);

        const receiveData = (data: any) => {};
        sendRequest(
            {
                method: 'post',
                url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw',
                data: {
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                },
            },
            receiveData
        );
        setDisplayModal(true);
    };

    const clearInputField = () => {
        resetNameInput();
        resetEmailInput();
        resetPasswordInput();
        resetPasswordCheckInput();
    };

    //closeModal
    const closeModal = (event: React.FormEvent) => {
        event.preventDefault();
        setDisplayModal(false);

        if (hasError) return;
        clearInputField();
        history.replace('/login');
    };

    //classes
    const usernameClasses = `${classes.input} ${
        usernameHasError && classes.invalid
    }`;

    const emailClasses = `${classes.input} ${emailHasError && classes.invalid}`;

    const passwordClasses = `${classes.input} ${
        passswordHasError && classes.invalid
    }`;

    const passwordCheckClasses = `${classes.input} ${
        passwordCheckHasError && classes.invalid
    }`;

    return (
        <React.Fragment>
            {!hasError && displayModal && !isLoading && (
                <ModalSuccess
                    onCloseModal={closeModal}
                    onBackdropClick={closeModal}
                />
            )}
            {hasError && displayModal && !isLoading && (
                <ModalError
                    onBackdropClick={closeModal}
                    onCloseModal={closeModal}
                />
            )}
            <div className={classes['signup-container']}>
                <img src="./1.svg" alt="background" />
                <form onSubmit={formSubmitHandler} className={classes.form}>
                    <h1> Create account </h1>
                    <div className={classes['form-control']}>
                        <label className={classes.label}>Username</label>
                        <Input
                            className={usernameClasses}
                            type="text"
                            onChange={usernameChangeHandler}
                            onBlur={usernameBlurHander}
                            value={enteredUsername}
                        />
                        <small>
                            {usernameHasError && usernameErrorMessage}{' '}
                        </small>
                    </div>
                    <div className={classes['form-control']}>
                        <label className={classes.label}>E-mail</label>
                        <Input
                            className={emailClasses}
                            type="email"
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            value={enteredEmail}
                        />
                        <small>{emailHasError && emailErrorMessage} </small>
                    </div>
                    <div className={classes['form-control']}>
                        <label className={classes.label}>Password</label>
                        <Input
                            className={passwordClasses}
                            type="password"
                            onBlur={passwordBlurHandler}
                            onChange={passwordChangeHandler}
                            value={enteredPassword}
                        />
                        <small>
                            {passswordHasError && passwordErrorMessage}{' '}
                        </small>
                    </div>
                    <div className={classes['form-control']}>
                        <label className={classes.label}>
                            Password confirm
                        </label>
                        <Input
                            className={passwordCheckClasses}
                            type="password"
                            onChange={passwordCheckChangeHandler}
                            onBlur={passwordCheckBlurHandler}
                            value={enteredPasswordCheck}
                        />
                        <small>
                            {passwordCheckHasError && passwordCheckErrorMessage}{' '}
                        </small>
                    </div>
                    <Button className={`${!formIsValid && classes.invalid}`}>
                        {!isLoading ? <p>Submit </p> : <p>Loading...</p>}
                    </Button>
                </form>
                <img src="./social.svg" alt="social" />
            </div>
            <Footer className={classes.footer} />
        </React.Fragment>
    );
};

export default Registration;
