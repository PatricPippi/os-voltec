/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';


const BackButton = () => {
  const history = useHistory();

  return (
    <div>
      <Button
        color="inherit"
        onClick={() => history.goBack()}
      >
        <ArrowBack />
        {' '}
        Voltar
      </Button>
    </div>
  );
};


export default BackButton;
