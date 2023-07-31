import { Box, Button, FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddPerson() {

    const history = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
        surname: "",
        email: "",
        age: ""
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const sendRequest = async () => {
        await axios.post("http://localhost:8000/people", {
            name:inputs.name,
            surname:inputs.surname,
            email:inputs.email,
            age:inputs.age
        }).then(res=> res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/people"))
    }

  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{marginTop: "50px"}}display="flex" flexDirection="column" maxWidth={700} margin="auto" >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              required fullWidth
              id="outlined-required"
              label="Required"
              name="name"
            />
            <br/>
            <FormLabel>Surname</FormLabel>
            <TextField
             value={inputs.surname}
             onChange={handleChange}
              required fullWidth
              id="outlined-required"
              label="Required"
              name="surname"
            />
            <br/>
             <FormLabel>Email</FormLabel>
            <TextField
                type="email"
             value={inputs.email}
             onChange={handleChange}
              required fullWidth
              id="outlined-required"
              label="Required"
              name="email"
            />
            <br/>
             <FormLabel>Age</FormLabel>
            <TextField
             value={inputs.age}
             onChange={handleChange}
              type='number'
              required fullWidth
              id="outlined-required"
              label="Required"
              name="age"
            />
            <Button size="large" sx={{marginTop: '20px'}}variant="contained" type='submit'>Add Person</Button>
        </Box>
    </form>
  )
}

export default AddPerson;