import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, FormLabel, TextField } from '@mui/material'

function PersonDetails() {

    const [inputs, setInputs] = useState({});

    const id = useParams().id;

    const history = useNavigate()

    useEffect(()=> {
        const fetchHandler = async () => {
            await axios 
            .get(`http://localhost:8000/people/${id}`)
            .then(res=>res.data).then(data => setInputs(data.person))
        };
        fetchHandler()
    },[id]);

    const sendRequest = async () => {
        await axios.patch(`http://localhost:8000/people/${id}`, {
            name: inputs.name,
            surname: inputs.surname,
            email: inputs.email,
            age: inputs.age
        }).then(res => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=> history('/people'))
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    }

  return (
    <div>
        {inputs &&( <form onSubmit={handleSubmit}>
        <Box sx={{marginTop: "50px"}}display="flex" flexDirection="column" maxWidth={700} margin="auto" >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              required fullWidth
              id="outlined"
              name="name"
            />
            <br/>
            <FormLabel>Surname</FormLabel>
            <TextField
             value={inputs.surname}
             onChange={handleChange}
              required fullWidth
              id="outlined"
              name="surname"
            />
            <br/>
             <FormLabel>Email</FormLabel>
            <TextField
                type="email"
             value={inputs.email}
             onChange={handleChange}
              required fullWidth
              id="outlined"
              name="email"
            />
            <br/>
             <FormLabel>Age</FormLabel>
            <TextField
             value={inputs.age}
             onChange={handleChange}
              type='number'
              required fullWidth
              id="outlined"
              name="age"
            />
            <Button size="large" sx={{marginTop: '20px'}}variant="contained" type='submit'>Edit Person details</Button>
        </Box>
    </form>)}
    </div>
  )
}

export default PersonDetails