/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, Button, TextField,
} from '@material-ui/core';

function StepService({
  currentStep, value, onChange, prev, next,
}) {
  const [valid, setValid] = useState(true);
  const [service, setService] = useState('');

  useEffect(() => {
    if (service.length > 3) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [service.length]);

  if (currentStep !== 2) {
    return null;
  }


  return (
    <div>
      <Dialog open>
        <div className="step-container">
          <DialogTitle>Serviço Realizado</DialogTitle>
          <TextField
            multiline
            label="Serviço Realizado"
            name="service"
            value={(value, service)}
            onChange={(onChange, (e) => setService(e.target.value))}
          />
          <div className="step-buttons">
            <Button
              variant="contained"
              className="step-button"
              color="secondary"
              disableElevation
              onClick={prev}
            >
              Voltar
            </Button>
            <Button
              disabled={valid}
              variant="contained"
              className="step-button"
              color="primary"
              disableElevation
              onClick={next}
            >
              Continuar
            </Button>
          </div>
        </div>

      </Dialog>
    </div>
  );
}

export default StepService;
