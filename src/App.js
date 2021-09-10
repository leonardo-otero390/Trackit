import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import "./reset.css"
import "./app.css"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
