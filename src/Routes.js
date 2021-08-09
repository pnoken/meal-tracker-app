import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Homepage } from "./home";
import { AddIngredientsPage } from "./ingredients";
import { RecipeSearchPage } from "./recipes";
import { ShoppingListPage } from "./shopping-list";

const routes = [
  {
    path: "/",
    Component: Homepage,
    exact: true,
  },
  {
    path: "/add-ingredient",
    Component: AddIngredientsPage,
  },
  {
    path: "/recipes",
    Component: RecipeSearchPage,
  },
  {
    path: "/shopping-list",
    Component: ShoppingListPage,
  },
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);
