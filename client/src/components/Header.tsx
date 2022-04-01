import { NavLink, useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { IoIosContact } from 'react-icons/io';
import { AuthContext } from '../context/auth-context/auth-context';
import { StyledHeader } from './styles/Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(true);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () => {
        authCtx.logout();
        history.replace('/login');
    };

    const toggleMenu = function () {
        setToggleMobileMenu(prev => !prev);
    };

    return (
        <StyledHeader>
            <h1>English for devs</h1>
            <GiHamburgerMenu
                onClick={toggleMenu}
                className="header_menu--icon"
            />
            <nav>
                <ul
                    onClick={toggleMenu}
                    className={`${
                        toggleMobileMenu ? 'header__menu--hidden' : ''
                    }`}
                >
                    <li>
                        <NavLink
                            to="/"
                            exact
                            activeClassName={'header__menu--active'}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/phrasal-verbs"
                            activeClassName={'header__menu--active'}
                        >
                            Phrasal verbs
                        </NavLink>
                    </li>

                    {isLoggedIn && (
                        <li>
                            <NavLink
                                to="/expressions"
                                activeClassName={'header__menu--active'}
                            >
                                Expressões
                            </NavLink>
                        </li>
                    )}
                    {!isLoggedIn && (
                        <li>
                            <NavLink
                                to="/login"
                                activeClassName={'header__menu--active'}
                            >
                                <IoIosContact className={'header__icon'} />{' '}
                                Entrar
                            </NavLink>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li>
                            <NavLink
                                to="/profile"
                                activeClassName={'header__menu--active'}
                            >
                                Perfil
                            </NavLink>
                        </li>
                    )}
                    {isLoggedIn && (
                        <li onClick={logoutHandler}>
                            <NavLink
                                to="/logout"
                                activeClassName={'header__menu--active'}
                            >
                                Sair
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;
