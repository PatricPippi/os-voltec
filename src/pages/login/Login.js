/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './Login.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid, TextField, Button, Paper, Typography, Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const jwt = require('jsonwebtoken');

function Login({ classes }) {
  const [login, setLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [openError, setOpenError] = useState(false);

  const history = useHistory();

  const tokenStoraged = localStorage.getItem('token');


  if (tokenStoraged) {
    history.push('/dashboard');
    return null;
  }


  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      login,
      userPassword,
    };

    try {
      const response = await api.post('login', data);

      const { token, isAdmin } = response.data;

      const { userId, name } = jwt.decode(token);

      localStorage.setItem('name', name);
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      localStorage.setItem('isAdmin', isAdmin);

      if (token) {
        history.push('/dashboard');
      } else {
        setOpenError(true);
        setUserPassword('');
        setLogin('');
      }
    } catch (error) {
      setOpenError(true);
      setUserPassword('');
      setLogin('');
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  return (
    <>
      <div className="loginContainer">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h2" className={classes.title}>Entrar</Typography>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Paper elevation={3} className={classes.paper}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <TextField
                  className={classes.input}
                  label="Login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
                <TextField
                  className={classes.input}
                  label="Senha"
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <Button
                  className={classes.button}
                  size="large"
                  variant="outlined"
                  color="primary"
                  disableElevation
                  type="submit"
                >
                  <span>Entrar</span>
                </Button>
              </Grid>
            </Paper>
          </form>
        </Grid>

      </div>
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert variant="filled" severity="error" onClose={handleClose}>
          Login e/ou senha inválido!
        </Alert>
      </Snackbar>
    </>
  );
}

const styles = () => ({
  input: {
    margin: '1rem',
  },
  paper: {
    padding: 25,
  },
  button: {
    marginTop: '1.5rem',
    marginBottom: '1rem',
    padding: '0 2rem 0 2rem',
  },
  title: {
    marginBottom: '4rem',
    color: '#ffffff',
  },
});

export default withStyles(styles)(Login);
