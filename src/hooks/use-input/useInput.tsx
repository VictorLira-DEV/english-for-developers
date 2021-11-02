import React, { useState } from "react";

const useInput = (validate: (a: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validate(enteredValue);
    const hasError = !valueIsValid && isTouched;

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
        isValid: valueIsValid, 
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
