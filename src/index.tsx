import React from "react";
import ReactDOM from "react-dom";
import "./global/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import StickyHeaderProvider from "./context/sticky-header/stickyHeader";
import AuthContextProvider from "./context/auth-context/auth-context";
import App from "./App";

ReactDOM.render(
    <AuthContextProvider>
        <StickyHeaderProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StickyHeaderProvider>
    </AuthContextProvider>,
    document.getElementById("root")
);
