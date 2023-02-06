import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

type Props = {
    Name: string;
}

const Navbar: FC<Props> = (props: Props) => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
            <Toolbar>
                <DirectionsCarIcon fontSize="large" />
                <Typography variant="h6" ml={3}>
                    MagnumCar
                </Typography>

                <Typography variant="h6" mr={3} ml={"auto"}>
                    Witaj, {props.Name}
                </Typography>
                <Button startIcon={<LogoutIcon fontSize='large' />} component={Link} to='/login' sx={{ textTransform: 'none', fontSize: '1.25rem' }} color="inherit"> Wyloguj</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar