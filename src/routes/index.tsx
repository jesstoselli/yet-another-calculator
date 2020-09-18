import React from "react";
import { Switch, Route } from "react-router-dom";

import Calculator from "../pages/Calculator";
import MathOperations from "../pages/MathOperations";

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path='/' exact component={Calculator} />
      <Route path='/mathops' component={MathOperations} />
    </Switch>
  </>
);

export default Routes;
