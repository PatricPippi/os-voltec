import React from 'react'
import { BottomNavigation, BottomNavigationAction, withStyles } from '@material-ui/core'
import { Assignment, AssignmentTurnedIn, AssignmentLate } from '@material-ui/icons';


const NavTab = ({classes}) => {

    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            showLabels
            className={classes.navTab}
        >
            <BottomNavigationAction label="Ordens Ativas" icon={<Assignment/>} />
            <BottomNavigationAction label="Em Andamento" icon={<AssignmentLate/>} />
            <BottomNavigationAction label="Concluídas" icon={<AssignmentTurnedIn/>} />
        </BottomNavigation>
    )
}
const styles = {
    navTab: {
        position: 'sticky',
        bottom: 0
    }
}

export default withStyles(styles)(NavTab);
