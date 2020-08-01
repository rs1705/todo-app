import React from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";
import "./todo-Item.css";
const TodoItem = (props) => {
  return (
    <Row lg={12} className="todoItem">
      <Col>
        <Badge
          className="custom-badge"
          pill
          variant="success"
        >
          {props.id}
        </Badge>
        {"    "}
        <span
          className={`${props.completed ? "todo-completed" : ""} ${
            props.starred ? "todo-starred" : ""
          }`}
        >
          {props.children}
        </span>
      </Col>

      <Col style={{ textAlign: "right" }}>
        <Button
          className={props.starred ? "button-starred" : "button-custom"}
          variant="warning"
          size="sm"
          onClick={props.markStar}
        >
          <span> ⭐</span>
        </Button>
        {"    "}
        <Button
          className={props.completed ? "button-marked" : "button-custom"}
          variant="success"
          size="sm"
          onClick={props.markDone}
          style={{}}
        >
          <span>✅</span>
        </Button>
        {"    "}
        <Button
          className="button-custom"
          variant="danger"
          size="sm"
          onClick={props.markDelete}
        >
          <span> ❌</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TodoItem;
