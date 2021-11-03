import React, { useState } from "react";

const useInput = (validate: (a: string) => {isValid: boolean, errorMessage: string}) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const {isValid, errorMessage} = validate(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setEnteredValue(event.currentTarget.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);

    }

    return {
        value: enteredValue,
        isValid: isValid, 
        errorMessage: errorMessage,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
