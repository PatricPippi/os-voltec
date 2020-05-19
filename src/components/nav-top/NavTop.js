import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Button, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import BackButton from './back-button/BackButton';
import { Link } from "react-router-dom";

import './NavTop.css'

const NavTop = (props) => {
    
    const classes = styles();

    const [state, setState] = React.useState({
        open: false
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, open: open });
    }

    return (
        <>
            <AppBar position="sticky">
                <Toolbar className={classes.toolBar}>
                    {
                        props.backButton === true && <BackButton/>
                    }
                    <Typography variant="h6" color="inherit">
                        {props.title}
                    </Typography>
                    
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={state.open} onClose={toggleDrawer(false)}>
                <div className="side-menu">
                    <Typography  variant="h6"><Link to="/" className="side-menu-link">Sair</Link></Typography>
                </div>
            </Drawer>
        </>
    )
}

const styles = makeStyles(theme => ({
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
}));


export default NavTop
