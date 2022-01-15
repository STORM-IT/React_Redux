import React from "react";
import Person from "./person";
import { delete_person } from "../Redux/Action/persons";
import { update_person } from "../Redux/Action/persons";
const Persons = () => {
    const person = useSelector(state => state.persons)
    const dispatch = useDispatch()
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => dispatch(delete_person(person.id))}
                    changed={event => dispatch(update_person(person.id,event.target.value))}
                />
            ))}
        </div>
    );
};

export default Persons;