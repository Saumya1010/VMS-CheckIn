import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./views/Welcome";
import Info from "./views/Info";
import Photo from "./views/photo";
import SelectHost from "./views/SelectHost";
import ThankYou from "./views/ThankYou";
import Navbar from "./views/Navbar";
import VisitType from "./views/VisitType";

import Test from "./views/TestPhoto";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/photo">
              <Photo />
            </Route>
            <Route path="/selectHost">
              <SelectHost />
            </Route>
            <Route path="/thankYou">
              <ThankYou />
            </Route>
            <Route path="/testPhoto">
              <Test />
            </Route>
            <Route path="/">
              <VisitType />
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;
