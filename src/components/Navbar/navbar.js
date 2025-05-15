import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // นำเข้า Link
import MoonIcon from '@mui/icons-material/Brightness2'; // ไอคอนดวงจันทร์
import SunIcon from '@mui/icons-material/WbSunny'; // ไอคอนดวงอาทิตย์
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;
const navItems = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Skills', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/' },
];

function DrawerAppBar(props) {
    // const { window } = props;
    const { window, toggleTheme } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme(); // เข้าถึงธีม

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <Link to={item.path} style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block', color: theme.palette.text.primary} }}
                        >
                            SANYA
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Link key={item.name} to={item.path} style={{ textDecoration: 'none' }}>
                                {/* <Button sx={{ color: '#fff' }}> */}
                                <Button sx={{ color: theme.palette.text.primary }}>
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <IconButton color="inherit" onClick={toggleTheme} sx={{ color: theme.palette.text.primary }}>
                        {theme.palette.mode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                {/* คอนเทนต์หลักจะอยู่ที่นี่ */}
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;