import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import useInput from "../../hooks/use-input/useInput";
import React, { useContext } from 'react';
import { AuthContext } from "../../context/auth-context/auth-context";
import { useHistory } from "react-router";

const Profile = () => {
   const authCtx = useContext(AuthContext)
    const history = useHistory()

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

        if(isValid !== true) return
        const enteredNewPassword = value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredNewPassword,
                returnSecureToken: false,
            }),
            headers: {'Content-type': 'application/json'}
        }).then(res => {
            //assumption : always succeeds  
            history.replace('/')
        })
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>New Password</label>
            <Input
                type="password"
                onChange={valueChangeHandler}
                onBlur={inputBlurHandler}
            />
            <Button> Change Password </Button>
        </form>
    );
};

export default Profile;
