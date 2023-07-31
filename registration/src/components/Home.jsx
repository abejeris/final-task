import React from 'react'
import { Box, Typography } from '@mui/material'


function Home() {
  return (
   
    <Box sx={{display:"flex", flexDirection: "column", alignItems: "center", paddingTop: "100px"}}>
    <Typography variant='h2'>Final Task of CodeAcademy FEUA2-1 Group</Typography>
    <Typography variant="h1">Registration app</Typography>
    <Typography variant="h5">Created by Audrius Bejeris</Typography>
    <Typography variant="h6">for</Typography>
    <Typography variant="h6">examinators:</Typography>
    <Typography variant="h5">Lukas Vaicekauskas</Typography>
    <Typography variant="h6">and</Typography>
    <Typography variant="h5">Gytis Juozėnas</Typography>
    <Typography variant="h6">2023/07/30</Typography>
    <Typography variant="h4">Thank you and good luck to you all!</Typography>
    </Box>
   
  )
}

export default Home