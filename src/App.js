import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/Home/LogIn";
import SignUp from "./pages/Home/SingUp";
import Habits from "./pages/Dashboard/Habits";
import "./assets/styles/reset.css"
import "./assets/styles/app.css"

function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
