import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import useInput from "../../hooks/use-input/useInput";
import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context/auth-context";
import { useHistory } from "react-router";
import Axios from "axios";

const Profile = () => {
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const validate = (value: string) => {
        return {
            isValid: value.trim().length > 7,
            errorMessage: "kkkk",
        };
    };

    const {
        inputBlurHandler,
        valueChangeHandler,
        reset,
        hasError,
        isValid,
        value,
    } = useInput(validate);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (isValid !== true) return;
        const enteredNewPassword = value;

        Axios({
            method: "post",
            url: "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw",
            data: {
                idToken: authCtx.token,
                password: enteredNewPassword,
                returnSecureToken: false,
            },
        })
            .then((response) => {
                history.replace("/");
            })
            .catch((err) => {
                alert("something went wrong");
            });
        reset();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>New Password</label>
            <Input
                type="password"
                onChange={valueChangeHandler}
                onBlur={inputBlurHandler}
                value={value}
            />
            <Button> Change Password </Button>
        </form>
    );
};

export default Profile;
