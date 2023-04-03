import { Box, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import Signimg from '../assets/img/signup.gif'
import '../assets/css/login.css'

function Signup() {
    return (
        <>
        <Box id="logincard" >
            <Grid container spacing={2}>
            <Grid item sx={8}>
            <Box sx={{display:{sm:"block",xs:"none"}}}>
                <img id='cardimg' src={Signimg} alt="" srcset="" />
                </Box>
            </Grid>
            <Grid item sx={4}>
                <h1 style={{textAlign:"center",paddingBottom:"20px",color:"black"}}>Signup</h1>
                <Stack direction={'column'}>
                    <TextField sx={{width:"250px"}}  label="Username" placeholder='Enter your username'  multiline/>
                    <br />
                    <TextField   label="Email" placeholder='Enter your Email'  multiline />
                    <br />
                    <TextField   label="Password" placeholder='Enter your Password'  multiline />
                    <br />
                    <button id="btn">Signup</button>
                    <a id='sub' style={{textAlign:"center",padding:"50px 0 0 0"}}><span>Already have account ?</span><span style={{color:"#89C4E1"}}> Login</span></a>
                </Stack>
            </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Signup
