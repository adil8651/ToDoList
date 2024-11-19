import React, { Fragment } from "react";
import "./App.css";

import InputTodo from "./conponents/InputTodo";
import ListTodos from "./conponents/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
