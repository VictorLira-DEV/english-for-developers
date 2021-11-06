import React from "react";

interface IInput {
    placeholder?: string;
    className?: string;
    type: string;
    value: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: () => void 
}

const Input = (props: IInput) => {
    return (
        <input
            placeholder={props.placeholder}
            className={props.className}
            type={props.type}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
        />
    );
};

export default Input;
