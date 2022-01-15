import React, { Fragment } from 'react'
import { Alert, Badge, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { handeleShowPersons } from './Components/Redux/Action/showPersons'
import Header from './Components/Header/header';
import NewPerson from './Components/Person/NewPerson';
import Persons from './Components/Person/Persons';
function App() {

  const showPerson = useSelector(state => state.showPerson)
  // console.log(check_Login)
  // const state = useSelector(state => state.login)
  const dispatch = useDispatch()
  return (
    <div className=' text-center'>
      <Header
        appTitle="مدیریت کننده اشخاص"
      />

      <NewPerson />

      <Button

        onClick={() => dispatch(handeleShowPersons())}
        variant={showPerson ? "info" : "danger"}
      >
        نمایش اشخاص
      </Button>
      {showPerson?<Persons/>:null}
      
    </div>
  );
}

export default App;
