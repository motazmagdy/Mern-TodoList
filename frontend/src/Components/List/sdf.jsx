<div>
      <div className="listTitle">List of todos</div>
      <Accordion>
        {todosList.map((todo) => {
          return (
            <div key={todo._id} className="todo">
              {!isEditing ? (
                
                <Accordion.Item key={todo._id} className="todo"  eventKey="0">
                  <Accordion.Header className="todoTitle">
                    {todo.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    {todo.body}
                    <br />
                    <div className="todoActions">
                      <button className="editBtn"onClick={editTodo}>Edit</button>
                      <button className="deleteBtn" onClick={()=>deleteTodo(todo._id)}>Delete</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ) : (
                <Form onSubmit={(e)=>handleTodoEdit(e,todo._id)} className="form">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    >
                    <Form.Label className="labels">Title</Form.Label>
                    <Form.Control
                      defaultValue={todo.title}
                      type="text"
                      placeholder='Enter new title'
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
                    <button className="updateBtn">Update</button>
                    <button className="cancelBtn">Cancel</button>
                  </div>
                </Form>
              )}
            </div>
          );
        })}
      </Accordion>
    </div>



















 {/* <div className="accordion" id="accordionExample"> */}

      {/* {todosList.map((todo) => {
          return (
            <div key={todo._id} className="todo">
              {!isEditing ? (
                <div className="accordion-item todo" key={todo._id}>
                  <h2 className="todoTitle" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {todo.title}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {todo.body}
                      <br />
                      <div className="todoActions">
                        <button className="editBtn" onClick={editTodo}>
                          Edit
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => deleteTodo(todo._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // <Accordion.Item key={todo._id} className="todo"  eventKey="0">
                // <Accordion.Header className="todoTitle">
                //   {todo.title}
                // </Accordion.Header>
                // <Accordion.Body>
                //   {todo.body}
                //   <br />
                //   <div className="todoActions">
                //     <button className="editBtn"onClick={editTodo}>Edit</button>
                //     <button className="deleteBtn" onClick={()=>deleteTodo(todo._id)}>Delete</button>
                //   </div>
                // </Accordion.Body>
                // </Accordion.Item>

                <Form
                  onSubmit={(e) => handleTodoEdit(e, todo._id)}
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
                    <button className="updateBtn">Update</button>
                    <button className="cancelBtn">Cancel</button>
                  </div>
                </Form>
              )}
            </div>
          );
        })}
