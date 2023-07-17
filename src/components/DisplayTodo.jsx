import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup ,Button} from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/action/todo";

const DisplayTodo = ({todo,deleteTodo}) => {
//   const [todo, setTodo] = useState([
//     {
//       title: "first title",
//       description: "first desc",
//     },

//     {
//       title: "Second title",
//       description: "Second desc",
//     },
//   ]);
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All todo are here</h3>
              <DisplayCount/>
              <ListGroup>
                {
                todo.map((todo, index) => (
                  <ListGroup.Item key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    <Button onClick={e=>deleteTodo(todo.id) }variant='danger' size="sm">Delete</Button>
                  </ListGroup.Item>
                ))
                }
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) =>{
    //console.log(state.todo)
    return{todo : state.todo}
}
const mapDispatchToProps=(dispatch)=>({
  deleteTodo:(id) => (dispatch(deleteTodo(id)))
})


 export default connect (mapStateToProps,mapDispatchToProps)(DisplayTodo);
