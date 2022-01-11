import React, { Fragment } from 'react'
import { Alert, Badge, Button } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from './Component/Redux/Action/action'
// import image1 from '../public/img/redux_Logo.png'



function App() {
  const counter = useSelector(state=>state)

  const despatch = useDispatch();
  return (
    <Fragment>
      <Alert className='text-center m-0' variant="info">
        REDUX TRY
      </Alert>
      <Alert className='text-center mt-0' variant="primary ">
        <Badge bg='warning' className='p-2'>{counter}</Badge>
        <br/>
        <div className='mt-3'>
        <Button onClick={()=>despatch(increment())}>+</Button> {" "}
        <Button onClick={()=>despatch(decrement())} >-</Button>
        </div>
      </Alert>
      
    </Fragment>
  );
}

export default App;
