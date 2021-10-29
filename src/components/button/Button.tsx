import React from "react";

interface IButton {
    children: any;
    onClick?: (event: React.FormEvent) => void;
    className?: string;
}
const Button = (props: IButton) => {
    return <button onClick={props.onClick} className={props.className}>{props.children}</button>;
};

export default Button;
