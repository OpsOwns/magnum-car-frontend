import { Drawer, List, ListItem, ListItemButton, ListItemText, makeStyles, styled, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { sideItems } from './SideItems';

const Sidebar: React.FC = () => {

    const drawerWidth = 240;
    const navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = useState(0);


    const StyledListText = styled(ListItemText)({
        textAlign: 'center',
        color: 'white'
    });

    const CustomListButton = styled(ListItemButton)({
        "&$selected": {
            backgroundColor: "red",
            color: "blue",
            "& .MuiListItemIcon-root": {
                color: "blue"
            }
        },
        "&$selected:hover": {
            backgroundColor: "purple",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        },
        "&:hover": {
            backgroundColor: "blue",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        }
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
                {sideItems.map(item =>
                    <ListItem key={item.id} >
                        <CustomListButton onClick={() => {
                            navigate(item.path);
                            setSelectedIndex(item.id)
                        }} selected={selectedIndex === item.id}>
                            <StyledListText primary={item.text} />
                        </CustomListButton>
                    </ListItem>
                )}
            </List>

        </Drawer>
    )
}

export default Sidebar