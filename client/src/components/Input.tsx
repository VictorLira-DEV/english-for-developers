import React from 'react';

interface IInput {
    placeholder?: string;
    className?: string;
    type: string;
    value: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
}

const Input = (props: IInput) => {
    const {
        type,
        className,
        value,
        placeholder,
        onBlur,
        onChange,
        onMouseEnter,
        onMouseLeave,
    } = props;

    return (
        <input
            placeholder={placeholder}
            className={className}
            type={type}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    );
};

export default Input;
