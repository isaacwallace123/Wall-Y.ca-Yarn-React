import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Typography, Toolbar, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { enqueueSnackbar } from "notistack";
import { ThemeContextEnum } from '../../Utils/Theme/ThemeEnum';
import { ThemeContext, ThemeInterface } from "../../Utils/Theme/ThemeMode";

import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import Menu from "@mui/icons-material/Menu.js";
import Home from "@mui/icons-material/Home.js";
import CloseIcon from '@mui/icons-material/Close';
import Info from "@mui/icons-material/Info.js";
/*import Brush from "@mui/icons-material/Brush.js";
import LocalOffer from "@mui/icons-material/LocalOffer.js";*/

export default function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("Home");

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const ThemeContainer = useContext<ThemeInterface>(ThemeContext);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up("md"));

    function navigatePage(PageName: string) {
        setCurrentPage(PageName);
        enqueueSnackbar(`Visiting ${(PageName === "" || PageName === undefined || PageName === null || PageName === "Home") ? "Home" : PageName} Page.`);
        navigate(`/${(PageName === "" || PageName === undefined || PageName === null || PageName === "Home") ? "" : PageName}`);
    }

    const Pages = [
        {
            Navigation: 'Home',
            Icon: <Home />
        },
        {
            Navigation: 'About',
            Icon: <Info />
        },
    ];

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', mb: 2 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Box component="img" alt='WaterMark' src='/Images/WaterMark.png' sx={{ maxHeight: '50px', maxWidth: '60%' }} />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />

                    <IconButton onClick={ThemeContainer.Swap} size="large" edge='start' color="inherit" aria-label="theme" sx={{ ml: 2 }}>
                        {ThemeContainer.Theme == ThemeContextEnum.Light ? (<Brightness4 />) : (<Brightness7 />)}
                    </IconButton>

                    <IconButton color="inherit" aria-label="open drawer" onClick={openDrawer} edge="start" sx={{ ml: 2, ...(isMobile && { display: 'none' }) }}>
                        {open ? (<CloseIcon/>) : (<Menu/>)}
                    </IconButton>
                </Toolbar>

                <Toolbar variant='dense' sx={{...(!isMobile && { display: 'none' })}}>
                    {Pages.map((Table) => (
                        <Button key={Table.Navigation} onClick={() => { navigatePage(Table.Navigation) }} sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: `${Table.Navigation == currentPage ? "bold" : "regular"}` }}>{Table.Navigation}</Typography>
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>

            <Drawer sx={{ width: 200, flexShrink: 0, '& .MuiDrawer-paper': { width: 200, boxSizing: 'border-box' } }} anchor="left" open={open} onClick={closeDrawer}>
                <Box sx={{ width: 200 }} role="presentation">
                    <List>
                        {Pages.map((Table) => (
                            <ListItem key={Table.Navigation} disablePadding>
                                <ListItemButton onClick={() => { navigatePage(Table.Navigation) }}>
                                    <ListItemIcon>{Table.Icon}</ListItemIcon>

                                    <ListItemText>
                                        <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: `${Table.Navigation == currentPage ? "bold" : "regular"}` }}>{Table.Navigation}</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}