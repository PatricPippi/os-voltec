import React, { useState, useEffect } from 'react'
import { Typography, Paper, makeStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, List, Button} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ServiceOrder.css'
import ScrollView from '../../components/scroll-view/ScrollView';
import Timer from 'react-compound-timer';
import EndOrder from '../end-order/EndOrder';
import { Link, useParams } from "react-router-dom";
import NavTop from '../../components/nav-top/NavTop';
import api from '../../services/api';

function ServiceOrder() {
    
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
    const [order, setOrder] = useState([])
    const [resume, setResume] = useState([])

    const { id } = useParams();

    const userId = 1

    const token = localStorage.getItem('token');

    async function orderData() {
        try {
            const response = await api.get(`order/${id}`, {
                headers: {
                    "x-access-token": token
                }
            })
            setOrder(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        orderData()
    }, [])

    useEffect(() => {
        findResume()
        console.log('chamado')
    }, [status.paused, state.start] )

    useEffect(() => {
        if (order.status === "inprogress")
        setState({
            start: true, 
            buttonStatus: {
                color: 'secondary', 
                text: 'Finalizar'
            } 
        })
        setStatus({...status, paused: true})
    }, [order.status])

    const handlePause = () => {
        if (status.paused === false) {
            createResume(2)
            setStatus({...status, paused: true})
        } else {
            createResume(1)
            setStatus({...status, paused: false})
        }
        
    }

    const classes = styles();


    async function createResume(type) {
        
        const data = {
            userId: userId,
            orderId: id,
            type: type,
            start: state.start
        }

        try {
           const response = await api.post(`resume`, data,{
                headers: {
                    "x-access-token": token
                },
            })
            
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    async function findResume() {
        const resumes = await api.get(`resume/${id}`, {
            headers: {
                "x-access-token": token
            }
        })
        setResume(resumes.data)
    }

    const listResume = resume.map((resume) =>
      <Typography key={resume.id}>{resume.type === 1 ? "Entrada" : "Saída"} - {resume.created_at}</Typography>
    )

    const handleStart = () => {
        if (state.start !== true) {

            setState({
                start: true, 
                buttonStatus: {
                    color: 'secondary', 
                    text: 'Finalizar'
                } 
            })

            createResume(1)
            
        } else {
            setOpen(true)
        }
    }

    
    return (
        <>
            <NavTop backButton={true}/>
            <Paper className={classes.cardHeader}>
                <div className="card-header">
                    <Typography variant>Pedido: {order.order}</Typography>
                    <Typography>OS: {order.serviceOrder}</Typography>
                </div>
                <div className="card-content">
                    <Typography variant="h5">{order.name}</Typography>
                    <Typography variant="h6">{order.phoneNumber}</Typography>
                    <Typography>{order.city} - {order.uf}</Typography>
                    <Typography variant="body2">{order.adress}, {order.district}</Typography>
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
                <Typography variant="subtitle1" className={classes.margin}>{order.service}</Typography>
                <Typography variant="h6">Descrição:</Typography>
                <Typography variant="subtitle1" className={classes.margin}>{order.description}</Typography>
                <Typography variant="h6">Veículo</Typography>
                <Typography variant="subtitle1">{order.carName} - {order.carNumber}</Typography>
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
                            <ScrollView height="20" padding="1">
                                {listResume}
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
        </>
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
