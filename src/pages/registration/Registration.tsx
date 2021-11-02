import Input from "../../components/input/Input";
import classes from "./styles/Registration.module.css";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import React from 'react'

const Registration = () => {
    return (
        <React.Fragment>
            <div className={classes["signup-container"]}>
                <img src="./1.svg" alt="background" />
                <form className={classes.form}>
                    <h1> Register </h1>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>Username</label>
                        <Input type="text" />
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>E-mail</label>
                        <Input type="email" />
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>Password</label>
                        <Input type="password" />
                    </div>
                    <div className={classes["form-control"]}>
                        <label className={classes.label}>
                            Password confirm
                        </label>
                        <Input type="password" />
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
