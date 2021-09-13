import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/Home/LogIn";
import SignUp from "./pages/Home/SingUp";
import Habits from "./pages/Dashboard/Habits/Habits";
import Today from "./pages/Dashboard/Today/Today";
import "./assets/styles/reset.css";
import "./assets/styles/app.css";
import React, { useState } from "react";
import UserContext from "./contexts/UserContext";

function App() {
const [userData,setUserData] = useState("");

  return (
    <UserContext.Provider value={{userData,setUserData}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/cadastro">
            <SignUp />
          </Route>
          <Route exact path="/habitos">
            <Habits />
          </Route>
          <Route exact path="/hoje">
            <Today />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
