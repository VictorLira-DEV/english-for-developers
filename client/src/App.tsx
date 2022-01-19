import React, { Suspense } from 'react';
import Header from './components/Header';
import './global/styles/index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/auth-context/auth-context';
import LoadSpinner from './components/LoadSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/login/Login'));
const Expressions = React.lazy(() => import('./pages/expressions/Expressions'));
const Profile = React.lazy(() => import('./pages/profile/Profile'));
const Registration = React.lazy(
    () => import('./pages/registration/Registration')
);
const PhrasalVerbs = React.lazy(() => import('./pages/phrasalVerbs/PhrasalVerbs'))

function App() {
    const authCtx = useContext(AuthContext);

    return (
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
    );
}

export default App;
