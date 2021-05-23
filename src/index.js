/*!

=========================================================
* COVID Support Platform - GDG Pune
=========================================================

* Product Page: <TODO: Add URL>
* Copyright 2021 GDG Pune

* Coded by GDG Pune

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Admin} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
