/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Typography, Paper } from '@material-ui/core';
import './Schedule.css';
import NavTop from '../../components/nav-top/NavTop';
import api from '../../services/api';

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function loadSchedules() {
      try {
        const orders = await api.get(`schedule/${userId}`, {
          headers: {
            'x-access-token': token,
          },
        });

        orders.data.map(async (d) => {
          const users = await api.get(`schedule/users/${d.serviceOrder}`, {
            headers: {
              'x-access-token': token,
            },
          });
          const cars = await api.get(`schedule/cars/${d.serviceOrder}`, {
            headers: {
              'x-access-token': token,
            },
          });
          setSchedule((schedule) => [
            ...schedule,
            {
              order: d,
              users: users.data,
              cars: cars.data,
            }]);
        });
      } catch (error) {
        console.error(error);
      }
    }
    loadSchedules();
  }, [userId]);


  const listSchedule = schedule.map((schedule) => (
    <Paper key={schedule.order.id} className="schedule-content" elevation={0}>
      <Typography variant="h6" className="schedule-margin">
        {schedule.order.serviceOrder}
        {' '}
        -
        {' '}
        {schedule.order.clientName.split(' ')[0]}
        {' '}
        as
        {' '}
        {schedule.order.serviceTime}
      </Typography>
      <div className="schedule-margin">
        {
          schedule.users.map((user, i) => (
            <Typography key={i}>{user.name}</Typography>
          ))
        }
      </div>
      {
        schedule.cars.map((car, index) => (
          <Typography key={index}>
            {car.carName}
            {' '}
            -
            {' '}
            {car.carNumber}
          </Typography>
        ))
      }
    </Paper>
  ));

  return (
    <>
			<NavTop backButton />
      <div className="schedule">
        <Typography variant="h5">Cronograma para hoje:</Typography>
        {listSchedule}
      </div>
    </>

  );
}

export default Schedule;
