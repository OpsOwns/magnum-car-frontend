import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {

    var date = new Date();

    return (
        <AppBar color="primary" elevation={23} sx={{
            top: "auto",
            position: "fixed",
            bottom: 0,
            textAlign: "center",
            zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
            <Toolbar sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Typography variant="h6" align="center">Created By Ops {date.getFullYear()}</Typography>
            </Toolbar>
        </AppBar>

    );
}

export default Footer;