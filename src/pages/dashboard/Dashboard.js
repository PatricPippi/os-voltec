/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import { Assignment, AssignmentTurnedIn, AssignmentLate } from '@material-ui/icons';
import {
  Grid, Container, List, BottomNavigation, BottomNavigationAction, withStyles,
} from '@material-ui/core';
import NavTop from '../../components/nav-top/NavTop';
import OsCard from '../../components/os-card/OsCard';
import api from '../../services/api';


function Dashboard({ classes }) {
  const token = localStorage.getItem('token');

  const [value, setValue] = React.useState(0);
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('active');

  const userId = 1;


  useEffect(() => {
    async function loadOrders() {
      try {
        const response = await api.get(`orders/${userId}/${status}`, {
          headers: {
            'x-access-token': token,
          },
        });

        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadOrders();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [status, token]);


  function handleClick(stat) {
    setStatus(stat);
  }

  const listItems = orders.map((order) => (
    <li key={order.id}>
      <OsCard
        status={order.status}
        type={order.type}
        serviceOrder={order.serviceOrder}
        name={order.name}
        description={order.description}
        id={order.id}
      />
    </li>
  ));

  return (
    <>
      <NavTop title="Ordens de serviço" />
      <Container>
        <Grid>
          <List>
            {listItems}
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
    </>
  );
}

const styles = {
  navTab: {
    position: 'sticky',
    bottom: 0,
  },
};

export default withStyles(styles)(Dashboard);
