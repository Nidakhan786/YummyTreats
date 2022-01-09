import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import "./index.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
