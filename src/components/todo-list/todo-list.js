import React, { useState } from "react";
import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import InputField from "../input-field/input-field";
import TodoItem from "../todo-item/todo-item";

const TodoList = ({ todos, completeTodo, starTodo, addTodo, removeTodo }) => {
  const [text, setText] = useState("");

  const addTodoItem = (e) => {
    if (text.length > 0) {
      addTodo(text);
    } else {
      alert("Empty entry is not allowed.Try again!");
      return;
    }
  };

  const getTodoItem = (e) => {
    setText(e.target.value);
  };

  const markDone = (id) => {
    completeTodo(id);
  };

  const markStar = (id) => {
    starTodo(id);
  };

  const markDelete = (id) => {
    removeTodo(id);
  };

  let list;

  let todolist = todos["todos"];
  console.log(todolist.length);
  if (todolist.length===0) {
    list = (
      <p style={{ color: "red", textAlign: "center" }}>
        Currently there are no items in the list.
      </p>
    );
  } else {
    list = todolist.map((item, idx) => (
      <Col key={item.id}>
        <TodoItem
          id={idx + 1}
          completed={item.completed}
          markDone={() => markDone(item.id)}
          markStar={() => markStar(item.id)}
          markDelete={() => markDelete(item.id)}
          starred={item.starred}
        >
          {item.title}
        </TodoItem>
        <hr />
      </Col>
    ));
  }

  return (
    <div>
      <Container>
        <Col sm="12">
          <Alert
            className="custom-alert"
            variant="info"
            style={{ textAlign: "center" }}
          >
            Why are you sitting idle? Get up and do some work! Add some items to
            the list!
          </Alert>
        </Col>
      </Container>
      <Container>
        <Row>
          <Col sm={10} style={{ marginBottom: "5px" }}>
            <InputField change={getTodoItem} />
          </Col>
          <Col sm={2}>
            <Button variant="info" onClick={addTodoItem} block>
              Add
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        {list}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch({ type: "ADD_TODO", title: title }),
  completeTodo: (id) => dispatch({ type: "COMPLETE_TODO", id: id }),
  starTodo: (id) => dispatch({ type: "STAR_TODO", id: id }),
  removeTodo: (id) => dispatch({ type: "REMOVE_TODO", id: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
