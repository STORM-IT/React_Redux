import React, { Fragment } from 'react'
import { Alert, Badge, Button } from 'react-bootstrap'
// import image1 from '../public/img/redux_Logo.png'
import { useDispatch, useSelector } from "react-redux"
import {decrement,increment} from "./Component/Redux/Action/action"

function App() {
  const counter = useSelector(state => state)

  const dispatch = useDispatch();
  return (
    <Fragment>
      <Alert className='text-center m-0' variant="info">
        REDUX TRY
      </Alert>
      <Alert className='text-center mt-0' variant="primary ">
        <Badge bg='warning' className='p-2'>{counter}</Badge>
        <br/>
        <div className='mt-3'>
        <Button onClick={()=>dispatch(increment())}>+</Button> {" "}
        <Button onClick={()=>dispatch(decrement())}>-</Button>
        </div>
      </Alert>
    </Fragment>
  );
}

export default App;
