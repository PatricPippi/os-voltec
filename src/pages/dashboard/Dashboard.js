/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect, useCallback } from 'react';
import { Assignment, AssignmentTurnedIn, AssignmentLate } from '@material-ui/icons';
import {
  Grid, Container, List, BottomNavigation, BottomNavigationAction, withStyles, Typography,
} from '@material-ui/core';
import Spinner from '../../components/spinner/Spinner';
import NavTop from '../../components/nav-top/NavTop';
import OsCard from '../../components/os-card/OsCard';
import api from '../../services/api';


function Dashboard({ classes }) {
  const token = localStorage.getItem('token');

  const [value, setValue] = useState(0);
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('active');
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem('userId');
  const isAdmin = localStorage.getItem('isAdmin');


  const loadOrders = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get('orders', {
        headers: {
          'x-access-token': token,
        },
        params: {
          userId,
          status,
          isAdmin,
        },
      });

      setOrders(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [isAdmin, status, token, userId]);

  useEffect(() => {
    loadOrders();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [loadOrders, status, token, userId]);


  function handleClick(stat) {
    setStatus(stat);
  }

  const listItems = orders.map((order) => (
    <li key={order.id}>
      <OsCard
        status={order.status}
        type={order.type}
        serviceOrder={order.serviceOrder}
        clientName={order.clientName}
        userName={order.name}
        description={order.service}
        id={order.id}
        date={`${order.serviceDate.split(' ')[0]} às ${order.serviceTime === null ? "Sem Horário" : order.serviceTime}`}
      />
    </li>
  ));

  return (
    <>
      <NavTop title="Ordens de serviço" refreshButton onRefresh={loadOrders} />
      <Container className={classes.container}>
        <Grid>
          <List>
            {orders.length ? listItems : <Typography className={classes.headingFive} variant="h5">Nenhuma Ordem!</Typography>}
          </List>
        </Grid>
      </Container>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.navTab}
      >
        <BottomNavigationAction label="Ordens Ativas" icon={<Assignment />} onClick={() => handleClick('active')} />
        <BottomNavigationAction label="Em Andamento" icon={<AssignmentLate />} onClick={() => handleClick('inprogress')} />
        <BottomNavigationAction label="Concluídas" icon={<AssignmentTurnedIn />} onClick={() => handleClick('complete')} />

      </BottomNavigation>
      {
        loading && <Spinner delay="100" />
      }
    </>
  );
}

const styles = {
  container: {
    paddingBottom: '3rem',
  },
  navTab: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
  },
  headingFive: {
    position: 'absolute',
    top: '30vh',
    left: '30vw',
  },
};

export default withStyles(styles)(Dashboard);
