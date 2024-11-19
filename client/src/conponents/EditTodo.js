import React, { Fragment, useState } from "react";

function EditTodo(props) {
  const [description, setDescription] = useState(props.description);
  async function updateDescription(e) {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:3001/todos/${props.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${props.id}`}
      >
        Edit
      </button>

      <div
        class="modal"
        id={`id${props.id}`}
        onClick={() => {
          setDescription(props.description);
        }}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                onClick={() => {
                  setDescription(props.description);
                }}
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => {
                  updateDescription(e);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  setDescription(props.description);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
