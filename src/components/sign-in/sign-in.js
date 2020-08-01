import React, { useState } from "react";
import { Row, Col, Form, Button, Container, Alert } from "react-bootstrap";
import { connect } from "react-redux";
const SignIn = ({ authStart }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = (e) => {
    e.preventDefault();
    authStart(email, pass);
  };

  return (
    <Container fluid>
      <hr />
      <Alert variant="info">
        <h6 style={{ textAlign: "center" }}>
          Login using your email id and password
        </h6>
      </Alert>
      <br />
      <Row>
        <Container>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </Form.Group>

              <Button variant="info" type="submit" onClick={login}>
                Login
              </Button>
            </Form>
          </Col>
        </Container>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authStart: (email, pass) => dispatch({ type: "AUTH_START", id: email, pass: pass }),
});

export default connect(null, mapDispatchToProps)(SignIn);
