import classes from "./styles/Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import React, {useContext} from "react";
import { StickyHeaderContext } from "../../context/sticky-header/stickyHeader";
import { IoIosContact } from "react-icons/io";
import { AuthContext } from "../../context/auth-context/auth-context";

const Header = () => {
    const headerCtx = useContext(StickyHeaderContext);
    const authCtx =  useContext(AuthContext)
    const history = useHistory()

    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () => {
        authCtx.logout();
        history.replace('/login')
    }

    return (
        <header className={`${classes.header} ${headerCtx.isIntersectingValue === true && classes.sticky}`}>
            <h1>English for devs</h1>
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
                    
                  { isLoggedIn && <li>
                        <NavLink
                            to="/expressions"
                            activeClassName={classes.active}
                        >
                            Expressões
                        </NavLink>
                    </li>}
                  {!isLoggedIn && <li>
                        <NavLink to="/login" activeClassName={classes.active}>
                            <IoIosContact className={classes.icon} /> Entrar
                        </NavLink>
                    </li>}
                    {isLoggedIn && <li>
                      <NavLink to="/profile" activeClassName={classes.active}>
                            Perfil
                        </NavLink>
                    </li>}
                    {isLoggedIn && <li onClick={logoutHandler}>
                      <NavLink to="/logout" activeClassName={classes.active}>
                            Sair
                        </NavLink>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
