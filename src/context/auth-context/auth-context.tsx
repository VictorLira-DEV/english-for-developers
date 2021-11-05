import React, { useState, useEffect, useCallback } from "react";
import { calculateRemainingTime, retrieveStoredToken } from '../../helper/helper-functions/helperFunctions'

interface IAuthContext {
    token: string | null;
    isLoggedIn: boolean;
    login: (token: string, expirationTime: string) => void;
    logout: () => void;
}

interface IProps {
    children: React.ReactNode;
}

let logoutTimer: any;

export const AuthContext = React.createContext({} as IAuthContext);
const AuthContextProvider = (props: IProps) => {
    const tokenData = retrieveStoredToken()
    let initialToken: any;
    if(tokenData){
        initialToken = tokenData?.token
    }
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken("");
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime')

        if(logoutTimer){
            clearTimeout(logoutTimer)
        }

    }, []);

    const loginHandler = (token: string, expirationTime: string) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime )
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer =  setTimeout(logoutHandler, remainingTime)
    };

    useEffect(() => {
        if(tokenData){
            console.log(tokenData)
            logoutTimer =  setTimeout(logoutHandler, tokenData.duration)
        }
    }, [logoutHandler, tokenData])

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

export default AuthContextProvider
