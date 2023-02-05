import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin: React.MouseEventHandler<HTMLButtonElement> | undefined = async () => {

    }

    return (
        <div>
            <form>
                <Box display="flex" flexDirection={"column"}
                    maxWidth={400} alignItems={"center"}
                    justifyContent={"center"}
                    margin={"auto"}
                    marginTop={15}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc",
                        }
                    }}
                >
                    <Typography variant='h3' textAlign={"center"}>MagnumCar</Typography>
                    <TextField margin={"normal"} onChange={e => setEmail(e.target.value)} type={'email'} variant="outlined" label="Login"></TextField>
                    <TextField margin={"normal"} onChange={e => setPassword(e.target.value)} type={'password'} variant="outlined" label="Hasło"></TextField>
                    <Button variant="contained" onClick={handleLogin} sx={{ marginTop: 3, borderRadius: 3 }} color="primary">Zaloguj</Button>
                </Box>
            </form>

            <Footer />
        </div>
    )
}

export default Login