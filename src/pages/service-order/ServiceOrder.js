/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { useState, useEffect, useCallback } from 'react';
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
import Moment from 'react-moment';
import 'moment/locale/pt-br';
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


  const [waze, setWaze] = useState('');
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [starts, setStarts] = useState(false);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState([]);
  const [resume, setResume] = useState([]);
  const [button, setButton] = useState({
    color: 'primary',
    text: 'Iniciar',
  });
  const [timer, setTimer] = useState({
    timeSeconds: '00',
    timeMinutes: '00',
    timeHours: '00',
  });


  useEffect(() => {
    setTimer({
      timeSeconds: `0${seconds}`.slice(-2),
      timeMinutes: `0${minutes}`.slice(-2),
      timeHours: `0${hours}`.slice(-2),
    });
  }, [hours, minutes, seconds]);

  const { id } = useParams();

  const userId = localStorage.getItem('userId');


  const token = localStorage.getItem('token');

  async function createResume(type) {
    const data = {
      userId,
      orderId: id,
      type,
      start: starts,
    };


    try {
      await api.post('resume', data, {
        headers: {
          'x-access-token': token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getResumes() {
    const resumes = await api.get(`resume/${id}`, {
      headers: {
        'x-access-token': token,
      },
    });
    setResume(resumes.data);
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
          setPaused(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    orderData();
  }, []);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get(`schedule/users/${order.serviceOrder}`, {
          headers: {
            'x-access-token': token,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    async function loadCars() {
      try {
        const response = await api.get(`cars/${order.serviceOrder}/${userId}`, {
          headers: {
            'x-access-token': token,
          },
        });

        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadCars();
    loadUsers();
  }, [order.serviceOrder, token, userId]);

  function handlePause() {
    if (paused === false) {
      createResume(2);
      setPaused(true);
      getResumes();
      pause();
    } else {
      createResume(1);
      setPaused(false);
      getResumes();
      start();
    }
  }

  // eslint-disable-next-line no-use-before-define
  const classes = styles();

  const listCars = cars.map((car) => (
    <Typography key={car.carId} variant="subtitle1">
      {car.carName}
      {' '}
      -
      {' '}
      {car.carNumber}
    </Typography>
  ));


  const listResume = resume.map((resum) => (
    <Typography key={resum.id}>
      {resum.type === 1 ? 'Entrada' : 'Saída'}
      {' '}
      -
      {' '}
      <Moment format="LLL" locale="pt-br">{resum.created_at}</Moment>
    </Typography>
  ));

  const endOrder = useCallback(() => {
    setOpen(true);
    console.log(starts);
  }, []);

  function handleStart() {
    if (!starts) {
      setStarts(true);
      setPaused(false);
      setButton({
        color: 'secondary',
        text: 'Finalizar',
      });
      start();
      createResume(1);
    } else {
      endOrder();
    }
  }

  function handleWaze(e) {
    e.preventDefault();

    const adress = `${order.adress} ${order.district} ${order.city}`;
    const link = adress
      .replace(/[^a-zA-Z0-9s]/g, ' ')
      .toLowerCase()
      .split(' ')
      .filter((links) => {
        return links !== '';
      })
      .join('%20');

    window.open(`https://waze.com/ul?q=${link}&navigate=yes`);
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
          <Typography variant="h5">{order.clientName}</Typography>
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
          <Button color="primary" onClick={(e) => handleWaze(e)}>
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
                          {timer.timeHours}
                          :
                          {timer.timeMinutes}
                          :
                          {timer.timeSeconds}
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
        <Typography variant="h6">Veículos</Typography>
        {listCars}
        <Typography variant="h6">Funcionários</Typography>
        {
          users.map((user, i) => (
            <Typography variant="subtitle1" key={i}>{user.name}</Typography>
          ))
        }
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={getResumes}
          >
            <Typography>Resumo</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <ScrollView height="20" paddin g="1">
                {listResume}
              </ScrollView>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className="footer">
          {
          order.status === 'complete' ? (
            <>
              <Typography variant="h6">Serviço Realizado:</Typography>
              <Typography variant="subtitle1" className={classes.margin}>{order.serviceCompleted}</Typography>
              <Typography variant="h6">Observação:</Typography>
              <Typography variant="subtitle1" className={classes.margin}>{order.observation}</Typography>
              <Typography variant="h6">Tempo / Deslocamento</Typography>
              <Typography variant="subtitle1" className={classes.margin}>
                Tempo:
                {' '}
                {order.time}
                , Deslocamento:
                {' '}
                {order.distance}
                km
              </Typography>
            </>
          ) : (
            <>
              <Button
                disabled={!paused && starts}
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
              {
                open === true
                && <EndOrder time={`${timer.timeHours}:${timer.timeMinutes}:${timer.timeSeconds}`} />
              }
            </>
          )
          }
        </div>
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
