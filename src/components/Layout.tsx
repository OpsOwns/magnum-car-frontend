import { Box, Grid, Toolbar } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './SideBar'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props: Props) => {
    return <>
        <Grid container>
            <Sidebar />
            <Navbar Name='Ops' />
            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                <Toolbar />
                {props.children}
            </Box>
            <Footer />
        </Grid>
    </>
}

export default Layout

