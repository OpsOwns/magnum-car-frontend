import { Drawer, List, ListItem, ListItemButton, ListItemText, styled, Toolbar } from '@mui/material'
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
        "&.Mui-selected": {
            backgroundColor: "#2e8b57!important"
        }
    });


    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string, index: number) => {
        event.preventDefault();
        navigate(path);
        setSelectedIndex(index);
    }

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
                {sideItems.map((item, index) =>
                    <ListItem key={item.id}>
                        <CustomListButton selected={index === selectedIndex} onClick={(event) => handleListItemClick(event, item.path, index)}>
                            <StyledListText primary={item.text} />
                        </CustomListButton>
                    </ListItem>
                )}
            </List>

        </Drawer>
    )
}

export default Sidebar