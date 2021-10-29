import React from "react";
interface IInput {
    placeholder: string;
    className: string;
    type: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const Input = (props: IInput) => {
    return (
        <input
            placeholder={props.placeholder}
            className={props.className}
            type={props.type}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        />
    );
};

export default Input;
