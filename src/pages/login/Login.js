import React, { useState } from 'react'
import "./Login.css"
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Paper, Typography} from '@material-ui/core';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function Login({classes}) {

    const [ login, setLogin ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')

    const history = useHistory();

    const token = localStorage.getItem('token')

    if(token) {
       history.push('/dashboard') 
       return null
    }
    

    async function handleSubmit(event) {

        event.preventDefault()

        const data = {
            login,
            userPassword,
        }
        
        try {
            const response = await api.post('login', data)

            const { token, isAdmin } = response.data

            localStorage.setItem('token', token)
            localStorage.setItem('isAdmin', isAdmin)

            if (token) {
                history.push("/dashboard")
            }
        
        } catch (error) {
            console.log(error)
        }
    }


    return (
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
                                onChange={e => setLogin(e.target.value)}
                            />
                            <TextField 
                                className={classes.input} 
                                label="Senha" 
                                type="password"
                                onChange={e => setUserPassword(e.target.value)}
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
    )
}

const styles = () => ({
    input: {
        margin: '1rem'
    },
    paper: {
        padding: 25
    },
    button: {
        marginTop: '1.5rem',
        marginBottom: '1rem',
        padding: '0 2rem 0 2rem'
    },
    title: {
        marginBottom: '4rem',
        color: '#ffffff',
    } 
});

export default withStyles(styles)(Login);

