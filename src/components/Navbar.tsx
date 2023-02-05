import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

type Props = {
    Name: string;
}

const Navbar: FC<Props> = (props: Props) => {

    const navigate = useNavigate();


    const handleLogout: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
        navigate('/login');
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
            <Toolbar>
                <DirectionsCarIcon fontSize="large" />
                <Typography variant="h6" ml={3}>
                    MagnumCar
                </Typography>
                <Button sx={{ ml: "auto", textTransform: 'none', fontSize: "1.25rem" }} onClick={handleLogout} color="inherit" startIcon={<LogoutIcon fontSize="large" />}>{props.Name}, Wyloguj</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar