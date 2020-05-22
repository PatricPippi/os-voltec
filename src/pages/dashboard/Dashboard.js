import React, { useState, useEffect } from 'react'
import NavTop from '../../components/nav-top/NavTop'
import OsCard from '../../components/os-card/OsCard'
import { Grid, Container, List, BottomNavigation, BottomNavigationAction, withStyles} from '@material-ui/core'
import { Assignment, AssignmentTurnedIn, AssignmentLate } from '@material-ui/icons';
import ScrollView from '../../components/scroll-view/ScrollView'
import api from '../../services/api'


function Dashboard({classes}) {

    const token = localStorage.getItem('token')

    const [value, setValue] = React.useState(0);
    const [orders, setOrders] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('active')

    useEffect(() => {
        loadOrders()
    }, [])

    async function loadOrders() {

        if (loading) {
            return;
        }

        try {
            const response = await api.get(`orders/${status}/${page}`, {
                headers: {
                    "x-access-token": token
                }
            })

            setOrders([...orders, ...response.data])

        } catch (error) {
            console.log(error)
        }
    }


    function handleClick(status) {
        setStatus(status)
    }

    const listItems = orders.map((order) =>
        <li key={order.id}>
            <OsCard 
                status={order.status}
                type={order.type}
                serviceOrder={order.serviceOrder}
                name={order.adress}
                description={order.description}
            />
        </li>
    )

    return (
        <ScrollView height="100">
            <NavTop title={status} />
                <Container>
                    <Grid>
                        <List>
                           {listItems}
                        </List>
                    </Grid>
                </Container>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.navTab}
                >
                    <BottomNavigationAction label="Ordens Ativas" icon={<Assignment/>} onClick={() => handleClick('active')}/>
                    <BottomNavigationAction label="Em Andamento" icon={<AssignmentLate/>} onClick={() => handleClick('inprogress')}/>
                    <BottomNavigationAction label="Concluídas" icon={<AssignmentTurnedIn/>} onClick={() => handleClick('complete')}/>
                </BottomNavigation>
        </ScrollView>
    )
}

const styles = {
    navTab: {
        position: 'sticky',
        bottom: 0
    }
}

export default withStyles(styles)(Dashboard)
