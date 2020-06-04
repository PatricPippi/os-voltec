/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, Button, TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const StepEnd = (props) => {
  const [open, setOpen] = useState(true);

  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div>
      <Dialog open={open}>
        <div className="step-container">
          <DialogTitle>Observações</DialogTitle>
          <TextField
            label="Observações"
            name="observation"
            value={props.value}
            onChange={props.onChange}
          />
          <div className="step-buttons">
            <Button
              variant="contained"
              className="step-button"
              color="secondary"
              disableElevation
              onClick={props.prev}
            >
              Voltar
            </Button>
            <Button
              variant="contained"
              className="step-button"
              color="primary"
              disableElevation
              onClick={() => setOpen(false), props.onClick}
            >
              <Link className="links" to="/dashboard">Finalizar</Link>
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default StepEnd;
