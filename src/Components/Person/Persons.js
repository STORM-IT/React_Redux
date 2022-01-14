import React from "react";
import Person from "./Person";
import { delete_person } from "../Redux/Action/persons";
import { update_person } from "../Redux/Action/persons";
const Persons = ({ persons, deletePerson, nameChange }) => {
    const dispatch = useDispatch()
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => dispatch(deletePerson(person.id))}
                    changed={event => dispatch(update_person(person.id,event.target.value))}
                />
            ))}
        </div>
    );
};

export default Persons;