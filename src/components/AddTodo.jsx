import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import DisplayCount from "./DisplayCount";

import { addTodo } from "../redux/action/todo";
import { connect } from "react-redux";
import { v4 } from "uuid";

const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    id:''
  });

  const handleSubmut = (e) => {
    e.preventDefault();
    // Add todo to store

    addTodo({...todo,id:v4()})
    console.log(todo);
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add to here</h3>
              <DisplayCount/>

              {/* Form */}
              <Form onSubmit={handleSubmut}>
                {/* title */}

                <Form.Group>
                  <Form.Label>ToDo Title</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter here"
                    value={todo.title}
                    onChange={(e) =>
                      setTodo({ ...todo, title: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>

                {/* description */}
                <Form.Group className="mt-3">
                  <Form.Label>ToDo Description</Form.Label>

                  <Form.Control
                    as={"textarea"}
                    placeholder="Enter here"
                    value={todo.description}
                    onChange={(e) =>
                      setTodo({ ...todo, description: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>

                <Container className="text-center mt-3">
                  <Button type="submit" varient="primary">
                    Add todo{" "}
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) =>({})
const mapDispatchToProps = (dispatch)=>({
  addTodo : (todo)=> (dispatch(addTodo(todo)))
})
export default  connect(mapStateToProps,mapDispatchToProps)(AddTodo);
