import Input from '../components/Input';
import Button from '../components/Button';
import useInput from '../hooks/use-input/useInput';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth-context/auth-context';
// import { useHistory } from "react-router";
import useAxios from '../hooks/use-axios/useAxios';
import Footer from '../components/Footer';
// import classes from './styles/Profile.module.css';
import profile_picture from '../assets/profile-default.png';
import { StickyHeaderContext } from '../context/sticky-header/stickyHeader';
import { StyledProfile, StyledProfileWrapper} from './styles/Profile.styled'

const Profile = () => {
    const authCtx = useContext(AuthContext);
    const [formIsValid, setFormIsValid] = useState(false);
    // const history = useHistory();
    const { sendRequest, isLoading, hasError } = useAxios();

    const headerCtx = useContext(StickyHeaderContext);
    headerCtx.intersectingFunction(false);

    //password
    const validatePassword = (value: string) => {
        return {
            isValid: value.trim().length > 7,
            errorMessage: 'A senha deve conter pelo menos 8 caracteres',
        };
    };

    const {
        inputBlurHandler: passwordBlurHandler,
        valueChangeHandler: passwordChangeHandler,
        reset: resetPassword,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        value: enteredPasswordValue,
        errorMessage: passwordErrorMessage,
    } = useInput(validatePassword);

    //password check
    const validatePasswordCheck = (value: string) => {
        return {
            isValid: value === enteredPasswordValue,
            errorMessage: 'As senhas devem ser iguais',
        };
    };

    const {
        inputBlurHandler: passwordCheckBlurHandler,
        valueChangeHandler: passwordCheckChangeHandler,
        reset: resetPasswordCheck,
        hasError: passwordCheckHasError,
        isValid: passwordCheckIsValid,
        value: enteredPasswordCheckValue,
        errorMessage: passwordCheckErrorMessage,
    } = useInput(validatePasswordCheck);

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (formIsValid !== true) return;
        const enteredNewPassword = enteredPasswordValue;
        if (hasError) {
            alert('something went wrong try again later');
            return;
        }
        const receiveData = (data: any) => {
            resetPassword();
            resetPasswordCheck();
        };

        sendRequest(
            {
                url: 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw',
                method: 'post',
                data: {
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                },
            },
            receiveData
        );
    };

    useEffect(() => {
        setFormIsValid(passwordIsValid && passwordCheckIsValid);
    }, [passwordIsValid, passwordCheckIsValid]);

    return (
        <StyledProfileWrapper>
            <StyledProfile>
                <div className={'profile_wraper'}>
                    <div className={'profile'}>
                        <img src={profile_picture} alt="profile" />
                        <p>user</p>
                        <p> Online </p>
                        {/* <p>sua sessão acabará em 121232 </p> */}
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <h2>Mudar a senha</h2>
                        <div
                            className={`${'formControl'} ${
                                passwordHasError && 'invalid'
                            }`}
                        >
                            <label>Nova senha</label>
                            <Input
                                type="password"
                                onChange={passwordChangeHandler}
                                onBlur={passwordBlurHandler}
                                value={enteredPasswordValue}
                                className={'input'}
                            />
                            {passwordHasError && (
                                <small> {passwordErrorMessage} </small>
                            )}
                        </div>
                        <div className={'formControl'}>
                            <label>Confirme a senha</label>
                            <Input
                                type="password"
                                onChange={passwordCheckChangeHandler}
                                onBlur={passwordCheckBlurHandler}
                                value={enteredPasswordCheckValue}
                                className={'input'}
                            />
                            {passwordCheckHasError && (
                                <small> {passwordCheckErrorMessage} </small>
                            )}
                        </div>

                        <Button
                            className={`${'button'} ${
                                !formIsValid && 'invalidBtn'
                            }`}
                        >
                            {isLoading ? <p>isLoading...</p> : <p>Enviar</p>}
                        </Button>
                    </form>
                </div>
            </StyledProfile>
            <Footer className={'footer'} />
        </StyledProfileWrapper>
    );
};

export default Profile;
