import React from 'react'
import { Dialog, DialogTitle, Button, TextField } from '@material-ui/core';

const StepService = (props) => {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div>
            <Dialog open>
                <div className="step-container">
                    <DialogTitle>Serviço Realizado</DialogTitle>
                    <TextField 
                        multiline={true}
                        label="Serviço Realizado"
                        name="service" 
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
                            onClick={props.next}
                        >
                            Continuar
                        </Button>
                    </div>
                </div>
                
            </Dialog>
        </div>
    )
}

export default StepService;