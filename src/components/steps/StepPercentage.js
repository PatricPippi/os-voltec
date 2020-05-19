import React, { useState } from 'react'
import { Dialog, DialogTitle, Button, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";

const StepPercentage = (props) => {

    const  [open, setOpen ] = useState(true)

    if (props.currentStep !== 'percentageStep') {
        return null
    }

    return (
        <div>
            <Dialog open={open}>
                <div className="step-container">
                    <DialogTitle>Porcentagem</DialogTitle>
                    <TextField 
                        type="number"
                        label="Porcentagem"
                        placeholder="%"
                        name="percent" 
                        value={props.value} 
                        onChange={props.onChange}
                    />
                    <div className="step-buttons">
                            <Button 
                                variant="contained" 
                                className="step-button" 
                                color="secondary" 
                                disableElevation 
                                onClick={() => setOpen(false)}
                            >
                                Cancelar
                            </Button>
                            <Button 
                                variant="contained" 
                                className="step-button" 
                                color="primary" 
                                disableElevation 
                                onClick={() => setOpen(false)}
                            >
                                <Link className="links" to="/dashboard">Finalizar</Link>
                            </Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default StepPercentage;