import React from 'react'
import { Card, CardContent, CardActions, Typography, makeStyles, Button } from '@material-ui/core'
import {ArrowRightAlt} from '@material-ui/icons';
import { Link } from "react-router-dom";

const OsCard = (props) => {

    const classes = styles();


    return (
        <div className={classes.card}>
            <Card>
                <CardContent>
                    <div className={classes.cardHeader}>
                        <Typography variant="h6">{props.serviceOrder}</Typography>
                        {
                            props.status === "complete" && 
                                <Typography 
                                    variant="subtitle1"
                                    className={classes.complete}
                                >
                                    Concluído
                                </Typography> 
                        }
                        {
                            props.status === "inProgress" && 
                                <Typography 
                                    variant="subtitle1"
                                    className={classes.inProgress}
                                >
                                    Em Andamento
                                </Typography>
                        }
                        <Typography variant="h6">{props.type}</Typography>
                    </div>
                    <Typography variant="subtitle1">{props.name}</Typography>
                    <Typography variant="subtitle2">{props.description}</Typography>
                    <Typography variant="caption" color="textSecondary">{props.date}</Typography>
                </CardContent>
                <CardActions>
                    <div className={classes.cardActions}>
                        <Button color="primary">
                            <Link to="/order">Abrir ordem</Link>
                            <ArrowRightAlt/>
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

const styles = makeStyles({
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardActions: {
        marginLeft: 'auto'
    },
    card: {
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    inProgress: {
        color: 'red',
    },
    complete: {
        color: 'green'
    }
});


export default OsCard
