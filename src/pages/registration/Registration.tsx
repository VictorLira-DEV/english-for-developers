import Input from "../../components/input/Input";
import classes from "./styles/Registration.module.css";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import React, { useState } from "react";
import useInput from "../../hooks/use-input/useInput";

const Registration = () => {
    const [formIsValid, setFormIsValid] = useState(false);

    //USERNAME
    const usernameValidation = (value: string) => {
        return value.trim().length > 4;
    };

    const {
        value: enteredUsername,
        isValid: enteredNameIsValid,
        hasError: usernameHasError,
        inputBlurHandler: usernameBlurHander,
        valueChangeHandler: usernameChangeHandler,
        reset: resetNameInput,
    } = useInput(usernameValidation);

    //EMAIL
    const emailValidation = (value: string) => {
        return value.trim().includes("@");
    };

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        inputBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        reset: resetEmailInput,
    } = useInput(emailValidation);

    //PASSWORD
    const passwordValidation = (value: string) => {
        return value.trim().length > 4;
    };
    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passswordHasError,
        inputBlurHandler: passwordBlurHandler,
        valueChangeHandler: passwordChangeHandler,
    } = useInput(passwordValidation);

    //PASSWORD CHECK


    const {
        value: enteredPasswordCheck,
        isValid: enteredPasswordCheckIsValid,
        hasError: passwordCheckHasError,
        inputBlurHandler: passwordCheckBlurHandler ,
        valueChangeHandler: passwordCheckChangeHandler,
    } = useInput(passwordCheckValidation);

    function passwordCheckValidation(value: string){
        return value === enteredPassword
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
                <form className={classes.form}>
                    <h1> Register </h1>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>Username</label>
                        <Input
                            className={usernameClasses}
                            type="text"
                            onChange={usernameChangeHandler}
                            onBlur={usernameBlurHander}
                        />
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>E-mail</label>
                        <Input
                            className={emailClasses}
                            type="email"
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>Password</label>
                        <Input
                            className={passwordClasses}
                            type="password"
                            onBlur={passwordBlurHandler}
                            onChange={passwordChangeHandler}
                        />
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
                    </div>
                    <Button>Submit</Button>
                </form>
                <img src="./social.svg" alt="social" />
            </div>
            <Footer className={classes.footer} />
        </React.Fragment>
    );
};

export default Registration;
