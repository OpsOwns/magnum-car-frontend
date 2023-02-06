import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
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
                <Typography variant="h6" align="center">Copyright © 2022 Ops</Typography>
            </Toolbar>
        </AppBar>

    );
}

export default Footer;