/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import NavTop from '../../components/nav-top/NavTop';

import './EndOrder.css';
import api from '../../services/api';


function EndOrder() {
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const [serviceCompleted, setServiceCompleted] = useState('');
  const [observation, setObservation] = useState('');

  const [finalKm, setFinalKm] = useState('');

  const [entryMom, setEntryMom] = useState('');
  const [exitMom, setExitMom] = useState('');
  const [entryAfternoon, setEntryAfternoon] = useState('');
  const [exitAfternoon, setExitAfternoon] = useState('');

  const history = useHistory();

  async function completeOrder() {
    const endData = {
      serviceCompleted,
      observation,
      finalKm,
      entryMom,
      exitMom,
      entryAfternoon,
      exitAfternoon,
      status: 'complete',
    };

    try {
      await api.put(`order/${id}`, endData, {
        headers: {
          'x-access-token': token,
        },
      });
    } catch (error) {
      return console.error(error);
    }

    return history.goBack();
  }


  return (
    <>
      <NavTop backButton />
      <div className="container">
        <div className="form-container">
          <h1>Finalizar a ordem</h1>
          <TextField
            fullWidth
            label="Quilometragem Final"
            InputLabelProps={{
              shrink: true,
            }}
            value={finalKm}
            onChange={(e) => setFinalKm(e.target.value)}
            type="number"
          />
          <TextField
            fullWidth
            label="Hora Entrada Manhã"
            InputLabelProps={{
              shrink: true,
            }}
            value={entryMom}
            onChange={(e) => setEntryMom(e.target.value)}
            type="time"
          />
          <TextField
            fullWidth
            label="Hora Saída Manhã"
            InputLabelProps={{
              shrink: true,
            }}
            value={exitMom}
            onChange={(e) => setExitMom(e.target.value)}
            type="time"
          />
          <TextField
            label="Hora Entrada Tarde"
            InputLabelProps={{
              shrink: true,
            }}
            value={entryAfternoon}
            onChange={(e) => setEntryAfternoon(e.target.value)}
            type="time"
            fullWidth
          />
          <TextField
            label="Hora Saída Tarde"
            InputLabelProps={{
              shrink: true,
            }}
            value={exitAfternoon}
            onChange={(e) => setExitAfternoon(e.target.value)}
            type="time"
            fullWidth
          />
          <TextField
            label="Serviço Realizado"
            value={serviceCompleted}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setServiceCompleted(e.target.value)}
            type="text"
            fullWidth
            multiline
          />
          <TextField
            label="Observação"
            value={observation}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setObservation(e.target.value)}
            type="text"
            fullWidth
            multiline
          />

          <Button
            variant="contained"
            disableElevation
            color="secondary"
            onClick={() => completeOrder()}
          >
            Finalizar Ordem
          </Button>
        </div>
      </div>
    </>
  );
}

export default EndOrder;
