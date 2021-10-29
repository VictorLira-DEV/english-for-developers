import classes from "./styles/Login.module.css";
import Button from "../../components/button/Button";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Slider from "../../components/slider/Slider";
import Input from "../../components/input/Input";

const Login = () => {
    const [focus, setFocus] = useState({
        email: false,
        password: false,
    });

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

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    //dynamic styles
    let emailInput = `${classes.inputWrapper} ${focus.email && classes.focus}`;
    let passwordInput = `${classes.inputWrapper} ${
        focus.password && classes.focus
    }`;
    let btn_signup = `${classes.btn} ${classes["create-account"]}`;
    let btn_login = `${classes.btn} ${classes.login}`;

    return (
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
                                className={classes.focus}
                                onMouseEnter={emailMouseEnterHandler}
                                onMouseLeave={emailMouseLeaveHandler}
                            />
                            {/* <small>error message</small> */}
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
                            />
                            {/* <small>error message</small> */}
                        </div>
                    </div>
                    <Button className={btn_login}>
                        login <BsArrowRightCircle />
                    </Button>
                    <p>or</p>
                    <Button className={btn_signup}>
                        sign up <AiOutlinePlusCircle />
                    </Button>
                    <p>Forgot Password ?</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
