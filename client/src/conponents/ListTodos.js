import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

function ListTodos() {
  const [todos, setTodos] = useState([]);
  async function getTodos() {
    try {
      const response = await fetch("http://localhost:3001/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getTodos();
  }, []);
  async function deleteTodo(id) {
    try {
      const deleteTodo = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
      console.log(deleteTodo);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo id={todo.todo_id} description={todo.description} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(todo.todo_id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTodos;
