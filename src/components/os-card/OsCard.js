import React from 'react'
import { Card, CardContent, CardActions, Typography, makeStyles, Button } from '@material-ui/core'
import {ArrowRightAlt} from '@material-ui/icons';
import { Link } from "react-router-dom";

const OsCard = ({status, type, clientName, description, date, serviceOrder, id, userName}) => {

    const classes = styles();

    return (
        <div className={classes.card}>
            <Card elevation={0}>
                <CardContent>
                    <div className={classes.cardHeader}>
                        <Typography variant="h6">{serviceOrder}</Typography>
                        {
                            status === "complete" && 
                                <Typography 
                                    variant="subtitle1"
                                    className={classes.complete}
                                >
                                    Concluído
                                </Typography> 
                        }
                        {
                            status === "inprogress" && 
                                <Typography 
                                    variant="subtitle1"
                                    className={classes.inProgress}
                                >
                                    Em Andamento
                                </Typography>
                        }
                        {
                            status === "active" && 
                                <Typography 
                                    variant="subtitle1"
                                    className={classes.complete}
                                >
                                    Ativa
                                </Typography>
                        }
                         
                        {
                            type === 0 && <Typography variant="h6">Extra Contrato</Typography>
                        }
                        {
                            type === 1 && <Typography variant="h6">Obra</Typography>
                        }
                        {
                            type === 2 && <Typography variant="h6">Garantia</Typography>
                        }
                        {
                            type === 3 && <Typography variant="h6">Manutenção</Typography>
                        }
                        {
                            type === 4 && <Typography variant="h6">Emergencial</Typography>
                        }
                        
                    </div>
                    <Typography variant="subtitle1">{clientName}</Typography>
                    <Typography variant="subtitle2">{description}</Typography>
                    <Typography variant="subtitle1">{userName}</Typography>
                    <Typography variant="caption" color="textSecondary">{date}</Typography>
                </CardContent>
                <CardActions>
                    <div className={classes.cardActions}>
                        <Button color="primary">
                            <Link to={`/order/${id}`}>Abrir ordem</Link>
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
