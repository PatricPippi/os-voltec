import React from 'react';
import { Dialog, DialogTitle, Button } from '@material-ui/core';

const StepComplete = (props) => {

    if (props.currentStep !== 1) {
        return null
    }

    return (
        <div>
            <Dialog open>
                <div className="step-container">
                    <DialogTitle>Concluido?</DialogTitle>
                    <div className="step-buttons">
                        <Button variant="contained" className="step-button" color="secondary" disableElevation onClick={props.prev}>Não</Button>
                        <Button variant="contained" className="step-button" color="primary" disableElevation onClick={props.next}>Sim</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )

    
}

export default StepComplete;