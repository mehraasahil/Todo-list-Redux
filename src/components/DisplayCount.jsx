import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'



const DisplayCount = ({todo}) => {
  return (
    <Card className='shadow-sm border border-o'>
        <Card.Body>
            <h4>Number Of Todos : {todo.length} </h4>
        </Card.Body>

    </Card>
  )
}

const mapStateToProps=(state)=>({todo:state.todo})

const mapDispatchToProps=(dispatch)=>({})
export default connect (mapStateToProps,mapDispatchToProps)(DisplayCount)
