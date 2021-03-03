import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./views/Welcome";
import Info from "./views/Info";
import Photo from "./views/Photo";
import SelectHost from "./views/SelectHost";
import ThankYou from "./views/ThankYou";
import Navbar from "./views/Navbar";
import VisitType from "./views/VisitType";

// import Test from "./views/TestPhoto";
import { Container } from "@material-ui/core";
import VisitDetail from "./views/VisitDetail";

function App() {
  return (
    <Container>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/info" component={Info} />
            <Route path="/photo" component={Photo} />
            <Route path="/selectHost" component={SelectHost} />
            <Route path="/thankYou" component={ThankYou} />
            <Route path="/visits/:id" component={VisitDetail} />
            <Route path="/" component={VisitType} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
}

export default App;
