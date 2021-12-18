import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import useInput from "../../hooks/use-input/useInput";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context/auth-context";
// import { useHistory } from "react-router";
import useAxios from "../../hooks/use-axios/useAxios";
import Footer from "../../components/footer/Footer";
import classes from "./styles/Profile.module.css";
import profile_picture from "../../assets/profile-default.png";

const Profile = () => {
	const authCtx = useContext(AuthContext);
	const [formIsValid, setFormIsValid] = useState(false);
	// const history = useHistory();
	const { sendRequest, isLoading, hasError } = useAxios();

	//password
	const validatePassword = (value: string) => {
		return {
			isValid: value.trim().length > 7,
			errorMessage: "A senha deve conter pelo menos 8 caracteres",
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
			errorMessage: "As senhas devem ser iguais",
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
			alert("something went wrong try again later");
			return;
		}
		const receiveData = (data: any) => {
			resetPassword();
			resetPasswordCheck();
		};

		sendRequest(
			{
				url: "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDhdPtWod30lodKdyjn-U5_DX8rClCz3vw",
				method: "post",
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
		<React.Fragment>
			<div className={classes.container}>
				<div className={classes.profile_wraper}>
					<div className={classes.profile}>
						<img src={profile_picture} alt="profile" />
						<p>victorlira@gmail.com </p>
						<p> Online </p>
						<p>sua sessão acabará em 121232 </p>
					</div>
					<form onSubmit={onSubmitHandler}>
						<h2>Mudar a senha</h2>
						<div
							className={`${classes.formControl} ${
								passwordHasError && classes.invalid
							}`}
						>
							<label>Nova senha</label>
							<Input
								type="password"
								onChange={passwordChangeHandler}
								onBlur={passwordBlurHandler}
								value={enteredPasswordValue}
								className={classes.input}
							/>
							{passwordHasError && (
								<small> {passwordErrorMessage} </small>
							)}
						</div>
						<div className={classes.formControl}>
							<label>Confirme a senha</label>
							<Input
								type="password"
								onChange={passwordCheckChangeHandler}
								onBlur={passwordCheckBlurHandler}
								value={enteredPasswordCheckValue}
								className={classes.input}
							/>
							{passwordCheckHasError && (
								<small> {passwordCheckErrorMessage} </small>
							)}
						</div>

						<Button
							className={`${classes.button} ${
								!formIsValid && classes.invalidBtn
							}`}
						>
							{isLoading ? <p>isLoading...</p> : <p>Enviar</p>}
						</Button>
					</form>
				</div>
			</div>
			<Footer className={classes.footer} />
		</React.Fragment>
	);
};

export default Profile;
