import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import One from "../../pages/One";
import Two from "../../pages/Two";
import Three from "../../pages/Three";
import Four from "../../pages/Four";
import Five from "../../pages/Five";
import Six from "../../pages/Six";
import Seven from "../../pages/Seven";
import Eight from "../../pages/Eight";
import Ten from "../../pages/Ten";
import Nine from "../../pages/Nine";
const App = () => (
  <div className="app">
    <Router>
      <Route path="/sumate/" exact component={One} />
      <Route path="/slide/2" component={Two} />
      <Route path="/slide/3" component={Three} />
      <Route path="/slide/4" component={Four} />
      <Route path="/slide/5" component={Five} />
      <Route path="/slide/6" component={Six} />
      <Route path="/slide/7" component={Seven} />
      <Route path="/slide/8" component={Eight} />
      <Route path="/slide/9" component={Nine} />
      <Route path="/slide/10" component={Ten} />
    </Router>
  </div>
);

export default App;
