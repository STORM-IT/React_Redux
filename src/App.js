import React, { Fragment } from 'react'
import { Alert, Badge, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, login } from './Component/Redux/Action/action'
function App() {

  const check_Login = useSelector(state=>state.login)
  const counter = useSelector(state => state.counter)
  console.log(check_Login)
  // const state = useSelector(state => state.login)
  
  const dispatch = useDispatch()
  return (
    <Fragment>
      <Alert className='text-center m-0' variant="info">
        REDUX TRY
      </Alert>
      <Alert className='text-center mt-0' variant="primary ">
        <Badge bg='warning' className='p-2'>{counter}</Badge>
        <br />
        <div className='mt-3'>
          <Button onClick={() => dispatch(increment())}>+</Button> {" "}
          <Button onClick={() => dispatch(decrement())}>-</Button>
        </div>
      </Alert>
      <Alert>
        Login = <Badge>{check_Login?"true":"false"}</Badge>
      </Alert>
      <Button onClick={() => dispatch(login())}>show or hidden</Button>
    </Fragment>
  );
}

export default App;
