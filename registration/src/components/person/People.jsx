import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Person from './Person';
import { StyledPeople } from './People.style';

const URL = "http://localhost:8000/people";

const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data)
}

function People() {
    const [people, setPeople] = useState();
    useEffect(()=> {
        fetchHandler().then(data => setPeople(data.people))
    },[]);
  return (
    <StyledPeople>
    
        <ul>
            {people && people.map((person, i) => (
                 <li className="person" key={i}>
                    <Person person={person}/>
                 </li>
            ))}
        </ul>
      
    </StyledPeople>
  )
}
export default People 