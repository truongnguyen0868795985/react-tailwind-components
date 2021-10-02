// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "@fortawesome/fontawesome-free/css/all.min.css";

// import Dashboard from "./Dashboard/Dashboard.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/dashboard" component={Dashboard} />
//       <Redirect from="/" to="/dashboard" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
