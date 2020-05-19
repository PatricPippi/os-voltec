import React from 'react'

import './ScrollView.css'
import { makeStyles } from '@material-ui/core'

const ScrollView = ({children, height, padding}) => {

    const styles = makeStyles({
        srollView: {
            overflowY: 'scroll',
            height: `${height}vh`,
            paddingRight: `${padding}rem`
        }
    })

    const classes = styles()

    return (
        <div className={classes.srollView}>
            {children}
        </div>
    )
}




export default ScrollView
