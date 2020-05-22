import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import BackButton from './back-button/BackButton';
import { useHistory } from "react-router-dom";

import './NavTop.css'

const NavTop = (props) => {

    const [state, setState] = React.useState({
        open: false
    });

    const history = useHistory()

    const classes = styles();

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, open: open });
    }


    function logOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('isAdmin')

        history.push('/')
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
                    <Typography onClick={logOut} variant="h6">Sair</Typography>
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
