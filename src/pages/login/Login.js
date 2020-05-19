import React from 'react'
import "./Login.css"
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Paper, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";

function Login({classes}) {
    return (
        <div className="loginContainer">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography variant="h2" className={classes.title}>Login</Typography>
                <form 
                    noValidate 
                    autoComplete="off"
                >
                    <Paper elevation={3} className={classes.paper}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <TextField className={classes.input} color="info" label="Numero do Cartão"/>
                            <TextField className={classes.input} color="info" label="Senha" type="password"/>
                            <Button 
                                className={classes.button} 
                                size="large" 
                                variant="outlined" 
                                color="primary" 
                                disableElevation
                            >
                                <Link to="/dashboard">Entrar</Link>
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

