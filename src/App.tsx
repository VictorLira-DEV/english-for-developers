import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import "./global/styles/index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Expressions from "./pages/expressions/Expressions";
import Logout from "./pages/logout/Logout";
import PhrasalVerbs from "./pages/phrasalVerbs/PhrasalVerbs";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";

function App() {
    console.log("haha");
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/phrasal-verbs">
                    <PhrasalVerbs />
                </Route>
                <Route path="/expressions">
                    <Expressions />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Registration />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
