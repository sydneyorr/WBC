import React from "react"
import Graphs from "./Graphs";
import Home from "./Home";
import Login from "./Login";
import NoMatch from "./NoMatch";
import Register from "./Register";
import Things from "./Things";

export const routes = [
  { pathname: "/", title: "Home", component: Home},
  { pathname: "/graphs", title: "Graphs", component: Graphs},
];
