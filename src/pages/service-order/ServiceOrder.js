import React, { useState } from 'react'
import { Typography, Paper, makeStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, List, Button} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ServiceOrder.css'
import ScrollView from '../../components/scroll-view/ScrollView';
import Timer from 'react-compound-timer';
import EndOrder from '../end-order/EndOrder';
import { Link } from "react-router-dom";
import NavTop from '../../components/nav-top/NavTop';

function ServiceOrder() {
    
    const classes = styles();

    const [state, setState] = useState({
        start: false,
        buttonStatus: {
            color: 'primary',
            text: 'Iniciar'
        }
        
    })

    const [status, setStatus] = useState({
        time: '00:00:00',
        distance: 0,
        paused: false
    })

    const [open, setOpen] = useState(false)

    const handlePause = () => {
        if (status.paused === false) {
            setStatus({...status, paused: true})
        } else {
            setStatus({...status, paused: false})
        }
        
    }

    const handleStart = () => {
        if (state.start !== true) {

            setState({
                start: true, 
                buttonStatus: {
                    color: 'secondary', 
                    text: 'Finalizar'
                } 
            })

            console.log('iniciado')
            //faz chamada a api para iniciar a ordem
        } else {
            setOpen(true)
            //faz chamada a api para finalizar a ordem
        }
    }

    
    return (
        <ScrollView height="100">
            <NavTop backButton={true}/>
            <Paper className={classes.cardHeader}>
                <div className="card-header">
                    <Typography variant>Pedido: 5555</Typography>
                    <Typography>OS: 7855</Typography>
                </div>
                <div className="card-content">
                    <Typography variant="h5">Gelita do Brasil LTDA</Typography>
                    <Typography variant="h6">51 99999 9999</Typography>
                    <Typography>Estância Velha - RS</Typography>
                    <Typography variant="body2">Est Campo Grande 550, Campo Grande</Typography>
                    <Button color="primary" href="https://waze.com/ul?ll=-29.7023078,-51.1271811&z=10&navigate=yes">
                        Abrir no Waze
                    </Button>
                </div>
            </Paper>
            <div className="content-header"></div>
            <div className="content">
                {   state.start === true &&
                    <>
                        <div className="status-header">
                            <Typography>
                                
                                    <Timer>
                                        {() => (
                                            <React.Fragment>
                                                <Timer.Hours formatValue={value => `${value}:`}/>
                                                <Timer.Minutes formatValue={value => `${value}:`}/>
                                                <Timer.Seconds />
                                            </React.Fragment>
                                        )}
                                    </Timer>
                                
                            </Typography>
                            <Typography>Distância: {status.distance}km</Typography>
                        </div>
                        <div className="status-button">
                            { 
                                status.paused !== true ? 
                                <Button 
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handlePause}
                                >
                                    Parar
                                </Button> : 
                                <Button 
                                    variant="outlined" 
                                    color="primary"
                                    onClick={handlePause}
                                >
                                    Voltar
                                </Button>  
                            }
                        </div>
                    </>
                }
                <Typography variant="h6">Serviço Solicitado:</Typography>
                <Typography variant="subtitle1" className={classes.margin}>Troca de capacitadores avariados</Typography>
                <Typography variant="h6">Veículo</Typography>
                <Typography variant="subtitle1">Sandero - IPV5418</Typography>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Resumo</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            <ScrollView height="20" padding="2">
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>
                                <Typography>Entrada</Typography>
                                <Typography>Saida</Typography>

                            </ScrollView>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <div className="footer">
                    <Button 
                        disableElevation 
                        variant="contained" 
                        onClick={handleStart}
                        className={classes.margin} 
                        color={state.buttonStatus.color} 
                        size="large"
                    >
                        {state.buttonStatus.text}
                    </Button>
                    <Button 
                        disableElevation 
                        variant="contained" 
                        size="large"
                    >
                        <Link to="/solicitar" className="links">Soliciar Material</Link>
                    </Button>
                </div>
                {
                    open === true &&
                    <EndOrder/>
                }
            </div>
        </ScrollView>
    )
}

const styles = makeStyles({
    cardHeader: {
        margin: '2rem',
        padding: '1rem',
        position: 'relative',
        bottom: '-8rem',
        marginTop: '-5rem'
    },
    margin: {
        marginBottom: '1.2rem'
    }
})

export default ServiceOrder
