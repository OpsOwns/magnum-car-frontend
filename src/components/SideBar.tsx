import { Drawer, List, ListItemButton, ListItemText, styled, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const sideItems = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/about', text: 'About' }
]

const Sidebar: React.FC = () => {

    const drawerWidth = 240;

    const StyledListText = styled(ListItemText)({
        textAlign: 'center',
        color: 'white'
    });

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
            }}
            PaperProps={{
                elevation: 12,
                sx: {
                    width: 240,
                    backgroundColor: "primary.light"
                }
            }}
        >
            <Toolbar />
            <List>
                {sideItems.map((item) =>
                    <ListItemButton sx={{
                        "&.Mui-selected": {
                            backgroundColor: "#2e8b57!important"
                        }
                    }} key={item.id} component={Link} to={item.path} selected={location.pathname === item.path}>
                        <StyledListText primary={item.text} />
                    </ListItemButton>
                )}
            </List>
        </Drawer>
    )
}

export default Sidebar