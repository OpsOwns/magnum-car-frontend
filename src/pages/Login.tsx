import {Box, Button, TextField, Typography} from '@mui/material';
import React, {useEffect} from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import Footer from '../components/Footer';
import {object, string, TypeOf} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {toast} from "react-toastify";


const schema = object({
    login: string().min(1, "Pole login jest wymagane"),
    password: string().min(4, "Wymagane jest minimum 4 znaki").max(20)
});

type LoginInput = TypeOf<typeof schema>;

const Login = () => {
    const {
        register,
        formState: {errors, isSubmitSuccessful},
        reset,
        handleSubmit,
    } = useForm<LoginInput>({
        resolver: zodResolver(schema)
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit: SubmitHandler<LoginInput> = async data => {
        await axios
            .post("http://localhost:4000/api/login", data)
            .then(function (response) {
                if (response.data.success === false) {
                    toast.error(response.data.error, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: 0,
                        toastId: "my_toast",
                    });
                } else {
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: 0,
                        toastId: "my_toast",
                    });
                    localStorage.setItem("auth", response.data.token);
                }
            })

            .catch(function (error) {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: 0,
                    toastId: "my_toast",
                });
                console.log(error);
            });

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                    <TextField margin={"normal"}
                               type={'text'}
                               variant='outlined'
                               label='Login'
                               placeholder='Login'
                               error={!!errors.login}
                               helperText={errors.login ? errors.login?.message : ''}
                               {...register('login')}
                    />

                    <TextField margin={"normal"} type={'password'} variant='outlined'
                               label='Haslo'
                               placeholder='Haslo'
                               error={!!errors.password}
                               helperText={errors.password ? errors.password?.message : ''}
                               {...register('password')}
                    />

                    <Button type='submit' variant="contained" sx={{marginTop: 3, borderRadius: 3}}
                            color="primary">Zaloguj</Button>
                </Box>
            </form>
            <Footer/>
        </div>
    )
}

export default Login