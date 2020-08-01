import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col  } from "react-bootstrap";

import "./header.css";
const header = () => {
  return (

    <Container fluid className="header">
      <Row>
        <Col className="main-heading">
          <h1>The todo App</h1>
        </Col>
      </Row>
      <Row style={{textAlign:"center"}}> 
        <Col className="nav-link"><Link to="/">Home</Link></Col>
        <Col className="nav-link"><Link to="/signin">Sign In</Link></Col>
        <Col className="nav-link"><Link to="/about">About</Link></Col>
      </Row>
    </Container>
  );
};

export default header;
