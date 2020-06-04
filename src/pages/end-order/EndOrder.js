/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import StepComplete from '../../components/steps/StepComplete';
import StepPercentage from '../../components/steps/StepPercentage';
import StepService from '../../components/steps/StepService';
import StepEnd from '../../components/steps/StepEnd';

import '../../components/steps/Steps.css';
import api from '../../services/api';


const EndOrder = ({ time }) => {
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const [currentStep, setCurrentStep] = useState(1);
  const [percentage, setPercentage] = useState('');
  const [serviceCompleted, setServiceCompleted] = useState('');
  const [observation, setObservation] = useState('');

  async function endOrder() {
    const endData = {
      serviceCompleted,
      observation,
      time,
      percentage,
      status: 'complete',
    };

    console.log(endData);

    try {
      await api.put(`order/${id}`, endData, {
        headers: {
          'x-access-token': token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleNext = (step) => {
    if (step !== 'percentageStep') {
      setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1);
    } else {
      setCurrentStep('percentageStep');
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1);
  };


  return (
    <div>
      <StepComplete
        currentStep={currentStep}
        next={handleNext}
        prev={() => handleNext('percentageStep')}
      />
      <StepPercentage
        currentStep={currentStep}
        next={handleNext}
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />

      <StepService
        currentStep={currentStep}
        next={handleNext}
        prev={handlePrev}
        value={serviceCompleted}
        onChange={(e) => setServiceCompleted(e.target.value)}
      />

      <StepEnd
        currentStep={currentStep}
        next={handleNext}
        prev={handlePrev}
        value={observation}
        onChange={(e) => setObservation(e.target.value)}
        onClick={endOrder}
      />
    </div>
  );
};

export default EndOrder;
