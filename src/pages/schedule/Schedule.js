/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Typography } from '@material-ui/core';
import './Schedule.css';
import NavTop from '../../components/nav-top/NavTop';

function Schedule() {
  return (
    <>
			<NavTop backButton />
      <div className="schedule">
        <Typography variant="h5">Cronograma para hoje:</Typography>
				<div className="schedule-content">
					<Typography variant="h6">TAURUS - 15:00</Typography>
					<Typography variant="subtitle1">Gol IPV 6060</Typography>
					<Typography variant="subtitle1">Sandero IPV 6060</Typography>
					<Typography variant="subtitle2">Ramon</Typography>
					<Typography variant="subtitle2">Igor</Typography>
					<Typography variant="subtitle2">Lucas</Typography>
				</div>
      </div>
    </>

  );
}

export default Schedule;
