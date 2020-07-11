/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, makeStyles, Drawer, MenuItem, MenuList, ListItemIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { useHistory } from 'react-router-dom';
import BackButton from './back-button/BackButton';

import './NavTop.css';

function NavTop({ backButton, title }) {
  const [state, setState] = React.useState({
    open: false,
  });

  const styles = makeStyles(() => ({
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuList: {
      margin: 0,
      padding: '0',
      width: '100%',
    },
    menuItem: {
      color: '#c0c0c0',
      marginTop: '10px',
    },
    menuIcon: {
      color: '#c0c0c0',
    },
  }));

  const history = useHistory();

  const classes = styles();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, open });
  };


  function logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('name');
    localStorage.removeItem('userId');

    history.push('/');
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolBar}>
          {
                        backButton === true && <BackButton />
                    }
          <Typography variant="h6" color="inherit">
            {title}
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
          <MenuList className={classes.menuList}>
            <MenuItem className={classes.menuItem} onClick={() => history.push('/schedule')}>
              <ListItemIcon>
                <CalendarToday fontSize="small" className={classes.menuIcon} />
              </ListItemIcon>
              <Typography variant="inherit">Cronograma</Typography>
            </MenuItem>
          </MenuList>
          <Typography onClick={logOut} variant="h6" className="side-menu-link">Sair</Typography>
        </div>
      </Drawer>
    </>
  );
}


export default NavTop;
