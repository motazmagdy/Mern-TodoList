import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare,faSquareCheck,faXmark } from '@fortawesome/free-solid-svg-icons'

import "./List.css";

function List(props) {
  const [todosList, setTodos] = useState([]);
  const [updatedId, setEditing] = useState();
  const updatedTitle = useRef();
  const updatedBody = useRef();

  const editTodo = (id) => {
    setEditing(id);
  };
  const cancelEditing = ()=>{
    setEditing('')
  }

  const handleTodoEdit = (id) => {
    // e.preventDefault();
    const updatedTodoData = {
      title: updatedTitle.current.value,
      body: updatedBody.current.value,
    };
    axios
      .put(
        `https://mern-todolist-0jfr.onrender.com/todos/${id}`,
        updatedTodoData
      )
      .then((res) => alert("Todo Updated successfully"))
      .catch((err) => console.log(err));
    setEditing('');
  };

  const deleteTodo = (id) => {
    axios
      .delete(`https://mern-todolist-0jfr.onrender.com/todos/${id}`)
      .then((res) => alert("Todo Deleted successfully"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getTodos = () => {
      axios
        .get("https://mern-todolist-0jfr.onrender.com/todos")
        .then((res) => setTodos(res.data.todos))
        .catch((err) => console.log(err));
    };
    getTodos();
  }, [todosList]);

  return (
    <div>
      <div className="listTitle">List of todos</div>
        {todosList.map((todo) => {
          return (
              <div className="todo" key={todo._id}>
                { (updatedId !== todo._id) ? (
                  <div>
                    <h2 className="todoTitle">
                      {todo.title}
                    </h2>
                    <div>
                      {todo.body}
                      <br />
                      <div className="todoActions">
                        <button className="editBtn" 
                          onClick={()=>editTodo(todo._id)
                        }>
                          <FontAwesomeIcon className="Icons" icon={faPenToSquare} size="sm" style={{color: "#000000",}} />
                          Edit
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => deleteTodo(todo._id)}
                        >
                          <FontAwesomeIcon className="Icons" icon={faTrash} size="sm" style={{color: "#000000",}} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Form
                    onSubmit={(e) =>e.preventDefault() }
                    className="form"
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="labels">Title</Form.Label>
                      <Form.Control
                        defaultValue={todo.title}
                        type="text"
                        placeholder="Enter new title"
                        ref={updatedTitle}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="labels">Descripion</Form.Label>
                      <Form.Control
                        defaultValue={todo.body}
                        as="textarea"
                        placeholder="Enter new description"
                        rows={3}
                        ref={updatedBody}
                      />
                    </Form.Group>
                    <div className="todoUpdate">
                      <button 
                      className="updateBtn" 
                      onClick={()=>handleTodoEdit(todo._id)}>
                        <FontAwesomeIcon className="Icons" icon={faSquareCheck} size="sm" style={{color: "#ffffff",}} />
                        Update
                        </button>
                      <button 
                      className="cancelBtn"
                      onClick={cancelEditing}
                      >
                        <FontAwesomeIcon className="Icons" icon={faXmark} size="sm" style={{color: "#ffffff",}} />
                        Cancel
                        </button>
                    </div>
                  </Form>
                )}
              </div>
        );
      })}
    </div>
  );
}

export default List;
