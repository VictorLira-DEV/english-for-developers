import React, { useState } from "react";

interface IAuthContext {
    token: string;
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
}

interface IProps {
    children: React.ReactNode;
}

export const AuthContext = React.createContext({} as IAuthContext);

const AuthContextProvider = (props: IProps) => {
    const [token, setToken] = useState("");

    const userIsLoggedIn = !!token;

    const loginHandler = (token: string) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken("");
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
