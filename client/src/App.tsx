import React, { Suspense } from 'react';
import Header from './components/Header';
import './global/styles/index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/auth-context/auth-context';
import LoadSpinner from './components/LoadSpinner';
import Home from './pages/Home';
import Login from './pages/Login';
import Expressions from './pages/Expressions';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import PhrasalVerbs from './pages/PhrasalVerbs';
import { ThemeProvider } from 'styled-components';
//LAZY LOADING

// const Home = React.lazy(() => import('./pages/Home'));
// const Login = React.lazy(() => import('./pages/Login'));
// const Expressions = React.lazy(() => import('./pages/Expressions'));
// const Profile = React.lazy(() => import('./pages/Profile'));
// const Registration = React.lazy(
//     () => import('./pages/Registration')
// );
// const PhrasalVerbs = React.lazy(() => import('./pages/PhrasalVerbs'))

function App() {
    const authCtx = useContext(AuthContext);

    const theme = {
        desktop: '1200px',
        laptop: '1042px',
        tablet: '768px',
        mobile: '480px',
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <Header />
                <Suspense
                    fallback={
                        <div className="centered">
                            <LoadSpinner />
                        </div>
                    }
                >
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/phrasal-verbs">
                            <PhrasalVerbs />
                        </Route>
                        {authCtx.isLoggedIn && (
                            <Route path="/expressions">
                                <Expressions />
                            </Route>
                        )}
                        {!authCtx.isLoggedIn && (
                            <Route path="/login">
                                <Login />
                            </Route>
                        )}
                        <Route path="/signup">
                            <Registration />
                        </Route>
                        {authCtx.isLoggedIn && (
                            <Route path="/profile">
                                <Profile />
                            </Route>
                        )}
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        </ThemeProvider>
    );
}

export default App;
