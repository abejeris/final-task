import { Button, Typography } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Person(props) {

    const history = useNavigate();
    const { _id, name, surname, email, age } = props.person;

    const deleteHandler = async () => {
       await axios
       .delete(`http://localhost:8000/people/${_id}`)
       .then(res => res.data)
       .then(() => history('/'))
       .then(() => history('/people'))
    }
    

  return (
    <div>
        <Typography>Name: {name}</Typography>
        <br/>
        <Typography>Surname: {surname}</Typography>
        <br/>
        <Typography>Email: {email}</Typography>
        <br/>
        <Typography>Age: {age}</Typography>
        <br/>
        <div className='buttons'>
        <Button LinkComponent={Link} to={`/people/${_id}`}variant="outlined">Update</Button>
        <Button onClick={deleteHandler} variant="outlined" color="error">Delete</Button>
        </div>
    </div>
  )
}

export default Person



