import React, { useRef } from "react";
import axios from "axios";
import "./TodoForm.css";

import Form from "react-bootstrap/Form";

function Todoform(props) {
  const title = useRef();
  const body = useRef();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const todoData = {
      title: title.current.value,
      body: body.current.value,
    };

    axios
      .post("https://mern-todolist-0jfr.onrender.com/todos", todoData)
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));

    title.current.value = "";
    body.current.value = "";
  };
  return (
    <div>
      <p className="title">
        <strong>
          <em>TodoList</em>
        </strong>
      </p>
      <Form onSubmit={handleTodoSubmit} className="form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="labels">Title</Form.Label>
          <Form.Control ref={title} type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="labels">Descripion</Form.Label>
          <Form.Control
            ref={body}
            as="textarea"
            placeholder="Enter description"
            rows={3}
          />
        </Form.Group>
        <button className="buttonStyled">Add todo</button>
      </Form>
    </div>
  );
}

export default Todoform;
