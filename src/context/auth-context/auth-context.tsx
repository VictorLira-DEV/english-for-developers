import React, { useState, useEffect, useCallback } from "react";

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

const calculateRemainingTime = (expirationTime: any) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const remainigDuration = adjExpirationTime - currentTime;
    return remainigDuration
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 60000){
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('token');
        return null
    }

    return {
        token: storedToken,
        duration: remainingTime
    } ;
}

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
