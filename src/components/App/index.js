import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import One from "../../pages/One";
import Two from "../../pages/Two";
import Three from "../../pages/Three";
import Four from "../../pages/Four";
import Ten from "../../pages/Ten";
import Nine from "../../pages/Nine";
import FormPage from "../../pages/FormPage";
const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/sumate/" exact component={One} />
        <Route path="/slide/2" component={Two} />
        <Route path="/slide/3" component={Three} />
        <Route path="/slide/4" component={Four} />
        <Route path="/slide/9" component={Nine} />
        <Route path="/slide/10" component={Ten} />
        <Route path="/slide/:id" component={FormPage} />
      </Switch>
    </Router>
  </div>
);

export default App;
