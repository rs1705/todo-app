import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import TodoList from "./components/todo-list/todo-list";
import SignIn from "./components/sign-in/sign-in";
import About from "./components/about/about";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>       
      </div>
    </BrowserRouter>
  );
}

export default App;
