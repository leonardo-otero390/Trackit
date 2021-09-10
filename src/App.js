import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import "./reset.css"
import "./app.css"
import SignUp from "./Components/SingUp/SingUp";
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
      </Switch>
    </Router>
  );
}

export default App;
