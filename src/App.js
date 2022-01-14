import React, { Fragment } from 'react'
import { Alert, Badge, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {handeleShowPersons} from './Components/Redux/Action/showPersons'
import Header from './Components/Header/Header';
import NewPerson from './Components/Person/NewPerson';
function App() {

  const showPerosn = useSelector(state => state.showPerosn)
  console.log(check_Login)
  // const state = useSelector(state => state.login)

  const dispatch = useDispatch()
  return (
    <Fragment>
      <Header
        appTitle="مدیریت کننده اشخاص"
      />

      <NewPerson/>

      <Button
        onClick={()=>dispatch(handeleShowPersons())}
        variant={showPerosn ? "info" : "danger"}
      >
        نمایش اشخاص
      </Button>

      {person}
    </Fragment>
  );
}

export default App;
