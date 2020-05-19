import React from 'react'
import { Button } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <div>
            <Button color="inherit" ><ArrowBack/><Link to="/dashboard"> Voltar</Link></Button>
        </div>
    )
}


export default BackButton
