import Input from "../../components/input/Input";
import classes from "./styles/Registration.module.css";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import React, { useState, useEffect } from "react";
import useInput from "../../hooks/use-input/useInput";
import Axios from "axios";

const Registration = () => {
    console.log("haha");
    const [formIsValid, setFormIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //USERNAME
    const usernameValidation = (value: string) => {
        return {
            isValid: value.trim().length > 4,
            errorMessage: "Username should be at least 6 characters",
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
            isValid: value.trim().includes("@"),
            errorMessage: "Invalid E-mail",
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
            isValid: value.trim().length > 5,
            errorMessage: "Password should be at least 6 characters",
        };
    };
    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        errorMessage: passwordErrorMessage,
        hasError: passswordHasError,
        inputBlurHandler: passwordBlurHandler,
        valueChangeHandler: passwordChangeHandler,
    } = useInput(passwordValidation);

    //PASSWORD CHECK

    const {
        value: enteredPasswordCheck,
        isValid: enteredPasswordCheckIsValid,
        errorMessage: passwordCheckErrorMessage,
        hasError: passwordCheckHasError,
        inputBlurHandler: passwordCheckBlurHandler,
        valueChangeHandler: passwordCheckChangeHandler,
    } = useInput(passwordCheckValidation);

    function passwordCheckValidation(value: string) {
        return {
            isValid: value === enteredPassword,
            errorMessage: "Password does not match",
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
        setIsLoading(true);

        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
            }
        ).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                console.log(res);
            } else {
                console.log(res);
                res.json().then((data) => {
                    let errorMessage = "Authentication failed";
                    console.log(data.error.message.includes("PASSWORD"));
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    alert(errorMessage);
                });
            }
        });
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
            <div className={classes["signup-container"]}>
                <img src="./1.svg" alt="background" />
                <form onSubmit={formSubmitHandler} className={classes.form}>
                    <h1> Register </h1>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>Username</label>
                        <Input
                            className={usernameClasses}
                            type="text"
                            onChange={usernameChangeHandler}
                            onBlur={usernameBlurHander}
                        />
                        <small>
                            {usernameHasError && usernameErrorMessage}{" "}
                        </small>
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>E-mail</label>
                        <Input
                            className={emailClasses}
                            type="email"
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                        <small>{emailHasError && emailErrorMessage} </small>
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>Password</label>
                        <Input
                            className={passwordClasses}
                            type="password"
                            onBlur={passwordBlurHandler}
                            onChange={passwordChangeHandler}
                        />
                        <small>
                            {passswordHasError && passwordErrorMessage}{" "}
                        </small>
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>
                            Password confirm
                        </label>
                        <Input
                            className={passwordCheckClasses}
                            type="password"
                            onChange={passwordCheckChangeHandler}
                            onBlur={passwordCheckBlurHandler}
                        />
                        <small>
                            {passwordCheckHasError && passwordCheckErrorMessage}{" "}
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
