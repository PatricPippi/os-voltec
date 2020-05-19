import React, { useState } from 'react'
import StepComplete from '../../components/steps/StepComplete';
import StepPercentage from '../../components/steps/StepPercentage';
import StepService from '../../components/steps/StepService';
import StepEnd from '../../components/steps/StepEnd';


import '../../components/steps/Steps.css'

const EndOrder = (props) => {

    const [currentStep, setCurrentStep ] = useState(1)
    
    const [ data, setData ] = useState({
        percent: '',
        service: '',
        observation: ''
    })


    const handleNext = (step) => {
        if (step !== 'percentageStep') {
            setCurrentStep(currentStep >= 2 ? 3 : currentStep + 1 )
        } else {
            setCurrentStep('percentageStep')
        }
    }

    const handlePrev = () => {
        setCurrentStep(currentStep <= 1 ? 1 : currentStep - 1 )
    }

    const handleChange = event => {
        const {name, value} = event.target
        setData({...data, [name]: value})    
      }

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
                value={data.percent}
                onChange={handleChange}
            />

            <StepService
                currentStep={currentStep}
                next={handleNext}
                prev={handlePrev}
                value={data.service}
                onChange={handleChange}
            />

            <StepEnd
                currentStep={currentStep}
                next={handleNext}
                prev={handlePrev}
                value={data.observation}
                onChange={handleChange}
            />
        </div>
    )
}

export default EndOrder
