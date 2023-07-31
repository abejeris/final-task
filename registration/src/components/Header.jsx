import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {NavLink} from 'react-router-dom';


function Header() {
    const [value, setValue] = useState(0);
  return (
    <AppBar sx={{backgroundColor: '#232f3d'}} position='sticky'>
        <Toolbar>
            <NavLink to='/' >
            <Typography>
                <ContactMailIcon sx={{color: 'white'}}/>
            </Typography>
            </NavLink>
            <Tabs 
                sx={{ml:"auto"}}
                textColor="inherit" 
                value={value} 
                indicatorColor='primary' 
                onChange={(e, val) => setValue(val)}>

                <Tab LinkComponent={NavLink} to='/add' label='Add person'/>
                <Tab LinkComponent={NavLink} to='/people' label="All people"/>

            </Tabs>
        </Toolbar>
    </AppBar>
  )
}

export default Header;