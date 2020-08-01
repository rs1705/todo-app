import React from "react";
import {Form, Container} from "react-bootstrap";
const InputField=(props)=>{
  return (
    <Container>
    <Form.Control type="text" placeholder="Enter item to add to the list" onChange={props.change}/>    
   </Container>
  );
}
export default InputField;