import classes from "./styles/Header.module.css";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import React from "react";
import { IoIosContact } from "react-icons/io";

const Header = () => {
    const loginHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    const logoutHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <header className={classes.header}>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/phrasal-verbs"
                            activeClassName={classes.active}
                        >
                            Phrasal verbs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/expressions"
                            activeClassName={classes.active}
                        >
                            Expressions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName={classes.active}>
                            <IoIosContact className={classes.icon} /> Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout" activeClassName={classes.active}>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
