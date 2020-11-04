/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  makeStyles,
  Button,
  Dialog,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import './ServiceOrder.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import 'moment/locale/pt-br';
import NavTop from '../../components/nav-top/NavTop';
import api from '../../services/api';

function ServiceOrder() {
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [driverCar, setDriverCar] = useState('');
  const [starts, setStarts] = useState(false);
  const [order, setOrder] = useState([]);
  const [open, setOpen] = useState(false);
  const [isDriver, setIsDriver] = useState(false);
  const [initialKm, setInitialKm] = useState();
  const [button, setButton] = useState({
    color: 'primary',
    text: 'Iniciar',
  });

  const { id } = useParams();

  const userId = localStorage.getItem('userId');

  const token = localStorage.getItem('token');

  const history = useHistory();

  async function initOrder() {
    const data = {
      orderId: id,
      isDriver,
      initialKm,
      driverCar,
      start: true,
    };

    try {
      await api.put('init', data, {
        headers: {
          'x-access-token': token,
        },
      });
    } catch (error) {
      console.log(error);
    }
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
        }
      } catch (error) {
        console.log(error);
      }
    }
    orderData();
  }, [id, token]);

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
      if (order.serviceOrder) {
        try {
          const response = await api.get(`cars/${order.serviceOrder}`, {
            headers: {
              'x-access-token': token,
            },
          });

          setCars(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    if (order) {
      loadCars();
      loadUsers();
    }
  }, [order, order.serviceOrder, token, userId]);


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


  function handleStart() {
    setOpen(!open);

    if (!starts) {
      setButton({
        color: 'secondary',
        text: 'Finalizar',
      });
      setStarts(true);
      initOrder();
    }
  }

  function handleFinalize() {
    if (starts) {
      history.push(`/finalizar/${id}`);
    }
  }

  function handleWaze(e) {
    e.preventDefault();

    const adress = `${order.adress} ${order.district} ${order.city}`;
    const link = adress
      .replace(/[^a-zA-Z0-9s]/g, ' ')
      .toLowerCase()
      .split(' ')
      .filter((links) => links !== '')
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
        <Typography variant="h6">Serviço Solicitado:</Typography>
        <Typography variant="subtitle1" className={classes.margin}>{order.service}</Typography>
        <Typography variant="h6">Descrição:</Typography>
        <Typography variant="subtitle1" className={classes.margin}>{order.description}</Typography>
        <Typography variant="h6">Veículos</Typography>
        {listCars}
        <Typography variant="h6">Funcionários</Typography>
        {
          users.map((user, i) => (
            <Typography variant="subtitle1" key={i}>{ user ? user.name : '' }</Typography>
          ))
        }
        <div className="footer">
          {
          order.status === 'complete' ? (
            <>
              <Typography variant="h6">Serviço Realizado:</Typography>
              <Typography variant="subtitle1" className={classes.margin}>{order.serviceCompleted}</Typography>
              <Typography variant="h6">Observação:</Typography>
              <Typography variant="subtitle1" className={classes.margin}>{order.observation}</Typography>
            </>
          ) : (
            <>
              <Button
                disableElevation
                variant="contained"
                onClick={() => { if (starts) handleFinalize(); else setOpen(!open); }}
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
            </>
          )
          }
        </div>
      </div>
      <Dialog open={open}>
        <div className="step-container">
          <DialogTitle>Você é motorista ?</DialogTitle>
          <div className="step-buttons">
            <Button
              variant="contained"
              className="step-button"
              color="secondary"
              disableElevation
              onClick={() => {
                setIsDriver(false);
                handleStart();
              }}
            >
              Não
            </Button>
            <Button
              variant="contained"
              className="step-button"
              color="primary"
              disableElevation
              onClick={() => setIsDriver(true)}
            >
              Sim
            </Button>
          </div>
          <DialogContent open={open} className={isDriver ? classes.enable : classes.disable}>
            <TextField
              label="Quilometragem Inicial"
              type="number"
              name="service"
              value={initialKm}
              onChange={(e) => setInitialKm(e.target.value)}
              fullWidth
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Veículo</InputLabel>

              <Select
                labelId="demo-controlled-open-select-label"
                value={driverCar}
                onChange={(e) => setDriverCar(e.target.value)}
                fullWidth
              >
                {
                  cars.map((carSelect) => (
                    <MenuItem value={carSelect.carNumber}>
                      {carSelect.carName}
                      {' '}
                      -
                      {' '}
                      {carSelect.carNumber}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <DialogActions>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                onClick={() => handleStart()}
              >
                Iniciar Ordem
              </Button>
            </DialogActions>
          </DialogContent>
        </div>

      </Dialog>
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
  formControl: {
    margin: 10,
    minWidth: 120,
    width: '60%',
  },
  disable: {
    display: 'none',
  },
  enable: {
    display: 'block',
  },
});

export default ServiceOrder;
