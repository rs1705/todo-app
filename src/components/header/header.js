import React from "react";
import { Link,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import "./header.css";
const header = ({ auth }) => {

  
  return (
    <Container fluid className="header">
      <Row>
        <Col className="main-heading">
          <h1>The todo App</h1>
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col className="nav-link">
          <Link to="/">Home</Link>
        </Col>
        {/* <Col className="nav-link">
          <Link to="/signin">{auth?"Sign out":"Sign in"}</Link>
        </Col> */}
        <Col className="nav-link">
          <Link to="/about">About</Link>
        
        </Col>
      </Row>
      {auth?<Redirect to="/"/>:""}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  auth: state.user.authStatus,
});
export default connect(mapStateToProps, null)(header);
