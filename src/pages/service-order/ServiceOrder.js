/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  Button,
} from '@material-ui/core';
import { useStopwatch } from 'react-timer-hook';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ServiceOrder.css';
import { Link, useParams } from 'react-router-dom';
import ScrollView from '../../components/scroll-view/ScrollView';
import EndOrder from '../end-order/EndOrder';
import NavTop from '../../components/nav-top/NavTop';
import api from '../../services/api';

function ServiceOrder() {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
  } = useStopwatch();


  const [starts, setStarts] = useState(false);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState([]);
  const [resume, setResume] = useState([]);
  const [button, setButton] = useState({
    color: 'primary',
    text: 'Iniciar',
  });
  const [time, setTime] = useState({
    timeSeconds: '00',
    timeMinutes: '00',
    timeHours: '00',
  });

  const sw = navigator.serviceWorker;

  const stateToServiceWorker = (data) => {
    if (sw.controller) {
      sw.controller.postMessage(data);
    }
  };

  useEffect(() => {
    stateToServiceWorker({
      timeSeconds: `0${seconds}`.slice(-2),
      timeMinutes: `0${minutes}`.slice(-2),
      timeHours: `0${hours}`.slice(-2),
    });
    setTime({
      timeSeconds: `0${seconds}`.slice(-2),
      timeMinutes: `0${minutes}`.slice(-2),
      timeHours: `0${hours}`.slice(-2),
    });
  }, [hours, minutes, seconds]);

  const { id } = useParams();

  const userId = 1;

  const token = localStorage.getItem('token');


  useEffect(() => {
    if (sw) {
      window.addEventListener('load', () => {
        sw.register('./src/serviceWorker.js')
          .then(() => sw.ready)
          .then(() => {
            sw.addEventListener('message', ({ data }) => {
              if (data !== undefined) {
                setTime({
                  timeSeconds: data.timeSeconds,
                  timeMinutes: data.timeMinutes,
                  timeHours: data.timeHours,
                });
              }
            });
          })
          .catch((error) => {
            console.log('[SW] Service Worker register error: ', error);
          });
      });
    }
  }, [setTime, sw]);

  async function createResume(type) {
    const data = {
      userId,
      orderId: id,
      type,
      starts,
    };

    try {
      await api.post('resume', data, {
        headers: {
          'x-access-token': token,
        },
      });
      console.log('call');
    } catch (error) {
      console.log(error);
      console.log('calleror');
    }
  }

  async function findResume() {
    const resumes = await api.get(`resume/${id}`, {
      headers: {
        'x-access-token': token,
      },
    });
    setResume(resumes.data);
    console.log('chamada resume');
  }

  useEffect(() => {
    async function orderData() {
      try {
        const response = await api.get(`order/${id}`, {
          headers: {
            'x-access-token': token,
          },
        });
        setOrder(response.data);

        if (response.data.status === 'inprogress') {
          setStarts(true);
          setButton({
            color: 'secondary',
            text: 'Finalizar',
          });
          console.log('chamada status');
          setPaused(true);
        }
      } catch (error) {
        console.log(error);
      }
      console.log('chamada ordem');
    }
    orderData();
  }, []);


  useEffect(() => {
    findResume();
  }, []);


  function handlePause() {
    if (paused === false) {
      createResume(2);
      findResume();
      setPaused(true);
      pause();
    } else {
      createResume(1);
      findResume();
      setPaused(false);
      start();
    }
  }

  // eslint-disable-next-line no-use-before-define
  const classes = styles();


  const listResume = resume.map((resum) => (
    <Typography key={resum.id}>
      {resum.type === 1 ? 'Entrada' : 'Saída'}
      {' '}
      -
      {' '}
      {resum.created_at}
    </Typography>
  ));

  function handleStart() {
    if (starts !== true) {
      setStarts(true);
      setButton({
        color: 'secondary',
        text: 'Finalizar',
      });
      createResume(1);
    } else {
      setOpen(true);
    }
  }


  return (
    <>
      <NavTop backButton />
      <Paper className={classes.cardHeader}>
        <div className="card-header">
          <Typography variant>
            Pedido:
            {order.order}
          </Typography>
          <Typography>
            OS:
            {order.serviceOrder}
          </Typography>
        </div>
        <div className="card-content">
          <Typography variant="h5">{order.name}</Typography>
          <Typography variant="h6">{order.phoneNumber}</Typography>
          <Typography>
            {order.city}
            {' '}
            -
            {' '}
            {order.uf}
          </Typography>
          <Typography variant="body2">
            {order.adress}
            ,
            {' '}
            {order.district}
          </Typography>
          <Button color="primary" href="https://waze.com/ul?ll=-29.7023078,-51.1271811&z=10&navigate=yes">
            Abrir no Waze
          </Button>
        </div>
      </Paper>
      <div className="content-header" />
      <div className="content">
        { starts === true
                    && (
                    <>
                      <div className="status-header">
                        <Typography>
                          {time.timeHours}
                          :
                          {time.timeMinutes}
                          :
                          {time.timeSeconds}
                        </Typography>
                      </div>
                      <div className="status-button">
                        {
                                paused !== true
                                  ? (
                                    <Button
                                      variant="outlined"
                                      color="secondary"
                                      onClick={() => handlePause()}
                                    >
                                      Parar
                                    </Button>
                                  )
                                  : (
                                    <Button
                                      variant="outlined"
                                      color="primary"
                                      onClick={() => handlePause()}
                                    >
                                      Voltar
                                    </Button>
                                  )
                            }
                      </div>
                    </>
                    )}
        <Typography variant="h6">Serviço Solicitado:</Typography>
        <Typography variant="subtitle1" className={classes.margin}>{order.service}</Typography>
        <Typography variant="h6">Descrição:</Typography>
        <Typography variant="subtitle1" className={classes.margin}>{order.description}</Typography>
        <Typography variant="h6">Veículo</Typography>
        <Typography variant="subtitle1">
          {order.carName}
          {' '}
          -
          {' '}
          {order.carNumber}
        </Typography>
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
            color={button.color}
            size="large"
          >
            {button.text}
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
                    open === true
                    && <EndOrder />
                }
      </div>
    </>
  );
}

const styles = makeStyles({
  cardHeader: {
    margin: '2rem',
    padding: '1rem',
    position: 'relative',
    bottom: '-8rem',
    marginTop: '-5rem',
  },
  margin: {
    marginBottom: '1.2rem',
  },
});

export default ServiceOrder;
