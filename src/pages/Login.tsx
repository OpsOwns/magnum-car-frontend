import {Box, Button, TextField, Typography} from '@mui/material';
import React, {useEffect} from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import Footer from '../components/Footer';
import {object, string, TypeOf} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";


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

    const onSubmit: SubmitHandler<LoginInput> = data => {

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