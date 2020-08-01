import React from "react";
import { Container, Row, Col,Jumbotron } from "react-bootstrap";

const about=()=>{
  return (
   <Container fluid>
     <Row>
       <Col>
         <Jumbotron>
         <h2> The todo app</h2>
        <p>The app has been built with ♥ in React js.</p>
        <p>Creator: Rahul Saini</p>
        <p>Github: Github.com/9-para</p>
         </Jumbotron>
       </Col>
     </Row>
   </Container>
  );
};export default about;