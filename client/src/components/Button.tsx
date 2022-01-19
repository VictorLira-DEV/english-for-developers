import React from "react";

interface IButton {
    children: any;
    onClick?: (event: React.FormEvent) => void;
    className?: string;
    id?: string;
}
const Button = (props: IButton) => {
    const { children, className, id, onClick } = props

    return <button onClick={onClick} className={className}>{children}</button>;
};

export default Button;
