import classes from './styles/Login.module.css';
import Button from '../../components/button/Button';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { BsArrowRightCircle } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import React, { useState, useEffect, useContext, Fragment } from 'react';
import { AuthContext } from '../../context/auth-context/auth-context';
import Slider from '../../components/slider/Slider';
import Input from '../../components/input/Input';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import useInput from '../../hooks/use-input/useInput';
import { useHistory } from 'react-router-dom';
import useAxios from '../../hooks/use-axios/useAxios';
import { StickyHeaderContext } from '../../context/sticky-header/stickyHeader';
import { motion } from 'framer-motion';

const Login = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const history = useHistory();
    const authCtx = useContext(AuthContext);
    const { sendRequest, isLoading, hasError } = useAxios();
    const [focus, setFocus] = useState({
        email: false,
        password: false,
    });

    const headerCtx = useContext(StickyHeaderContext);
    headerCtx.intersectingFunction(false);

    //EMAIL
    const validateEmail = (value: string) => {
        return {
            isValid: value.trim().includes('@'),
            errorMessage: 'E-mail invalido',
        };
    };
    const {
        value: enteredEmail,
        errorMessage: emailErrorMessage,
        hasError: enteredEmailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        isValid: emailIsValid,
        reset: resetEmailInput,
    } = useInput(validateEmail);

    //PASSWORD
    const validatePassword = (value: string) => {
        return {
            isValid: value.trim().length > 5,
            errorMessage: 'A senha deve conter pelo menos 6 caracteres',
        };
    };
    const {
        value: enteredPassword,
        errorMessage: passwordErrorMessage,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        isValid: passwordIsValid,
        reset: resetPasswordInput,
    } = useInput(validatePassword);

    const emailMouseEnterHandler = () => {
        setFocus(() => {
            return { email: true, password: false };
        });
    };

    const emailMouseLeaveHandler = () => {
        setFocus(() => {
            return { email: false, password: false };
        });
    };

    //password
    const passwordEnterHandler = () => {
        setFocus(() => {
            return { email: false, password: true };
        });
    };

    const passwordLeaveHandler = () => {
        setFocus(() => {
            return { email: false, password: false };
        });
    };

    useEffect(() => {
        setFormIsValid(emailIsValid && passwordIsValid);
    }, [emailIsValid, passwordIsValid]);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (formIsValid !== true) return;

        if (hasError) {
            // alert('Ocorreu algo de errado tente mais tarde');
            return;
        }
        const receiveData = async (response: any) => {
            let expiresIn = await response.data.expiresIn;
            let idToken = await response.data.idToken;

            const expirationTime = new Date(
                new Date().getTime() + +expiresIn * 1000
            );

            authCtx.login(idToken, expirationTime.toISOString());
            history.replace('/');
            resetEmailInput();
            resetPasswordInput();
        };

        sendRequest(
            {
                method: 'post',
                url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw',
                data: {
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                },
            },
            receiveData
        );
    };

    //dynamic styles
    let emailInput = `${classes.inputWrapper} ${
        enteredEmailHasError && classes.invalid
    } ${focus.email && classes.focus}`;
    let passwordInput = `${classes.inputWrapper} ${
        passwordHasError && classes.invalid
    } ${focus.password && classes.focus}`;
    let btn_signup = `${classes.btn} ${classes['create-account']}`;
    let btn_login = `${classes.btn} ${classes.login} ${
        !formIsValid && classes.invalidBtn
    }`;

    return (
        <React.Fragment>
            <div className={classes.login}>
                <div className={classes.wrapper}>
                    <Slider />
                    <form className={classes.form} onSubmit={submitHandler}>
                        <h2> Login </h2>
                        <div className={classes['form-control']}>
                            <div className={emailInput}>
                                <MdOutlineEmail className={classes.icon} />
                                <Input
                                    type="email"
                                    placeholder="E-mail"
                                    className={`${classes.focus} ${classes.invalid}`}
                                    onMouseEnter={emailMouseEnterHandler}
                                    onMouseLeave={emailMouseLeaveHandler}
                                    onChange={emailChangeHandler}
                                    onBlur={emailBlurHandler}
                                    value={enteredEmail}
                                />
                                {enteredEmailHasError && (
                                    <small> {emailErrorMessage} </small>
                                )}
                            </div>
                        </div>
                        <div className={classes['form-control']}>
                            <div className={passwordInput}>
                                <RiLockPasswordLine className={classes.icon} />
                                <Input
                                    type="password"
                                    placeholder="Senha"
                                    className={classes.focus}
                                    onMouseEnter={passwordEnterHandler}
                                    onMouseLeave={passwordLeaveHandler}
                                    onChange={passwordChangeHandler}
                                    onBlur={passwordBlurHandler}
                                    value={enteredPassword}
                                />
                                {passwordHasError && (
                                    <small> {passwordErrorMessage} </small>
                                )}
                            </div>
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className={`${btn_login}`}
                        >
                            {!isLoading && (
                                <Fragment>
                                    Entrar <BsArrowRightCircle />
                                </Fragment>
                            )}
                            {isLoading && (
                                <Fragment>
                                    Loading... <BsArrowRightCircle />
                                </Fragment>
                            )}
                        </motion.button>
                        <p>or</p>
                        <Link to="/signup">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className={btn_signup}
                            >
                                Criar conta <AiOutlinePlusCircle />
                            </motion.button>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer className={classes.footer} />
        </React.Fragment>
    );
};

export default Login;
