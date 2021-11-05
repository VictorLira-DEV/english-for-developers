import classes from "./styles/Login.module.css";
import Button from "../../components/button/Button";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth-context/auth-context";
import Slider from "../../components/slider/Slider";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import useInput from "../../hooks/use-input/useInput";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Login = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    const [focus, setFocus] = useState({
        email: false,
        password: false,
    });

    //EMAIL
    const validateEmail = (value: string) => {
        return {
            isValid: value.trim().includes("@"),
            errorMessage: "Invalid E-mail",
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
            errorMessage: "Password should be at least 6 characters",
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
        setIsLoading(true);

        Axios({
            method: "post",
            url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw",
            data: {
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            },
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                setIsLoading(false);
                console.log(response.data);
                const expirationTime = new Date(
                    new Date().getTime() + +response.data.expiresIn * 1000
                );

                authCtx.login(
                    response.data.idToken,
                    expirationTime.toISOString()
                );
                history.replace("/");
                resetEmailInput();
                resetPasswordInput();
            })
            .catch((err) => {
                setIsLoading(false);
                alert("falha na authenticação");
            });
    };

    //dynamic styles
    let emailInput = `${classes.inputWrapper} ${
        enteredEmailHasError && classes.invalid
    } ${focus.email && classes.focus}`;
    let passwordInput = `${classes.inputWrapper} ${
        passwordHasError && classes.invalid
    } ${focus.password && classes.focus}`;
    let btn_signup = `${classes.btn} ${classes["create-account"]}`;
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
                        <div className={classes["form-control"]}>
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
                        <div className={classes["form-control"]}>
                            <div className={passwordInput}>
                                <RiLockPasswordLine className={classes.icon} />
                                <Input
                                    type="password"
                                    placeholder="Password"
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
                        <Button className={`${btn_login}`}>
                            {!isLoading && (
                                <>
                                    login <BsArrowRightCircle />
                                </>
                            )}
                            {isLoading && (
                                <>
                                    Loading... <BsArrowRightCircle />
                                </>
                            )}
                        </Button>
                        <p>or</p>
                        <Link to="/signup">
                            <Button className={btn_signup}>
                                sign up <AiOutlinePlusCircle />
                            </Button>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer className={classes.footer} />
        </React.Fragment>
    );
};

export default Login;
