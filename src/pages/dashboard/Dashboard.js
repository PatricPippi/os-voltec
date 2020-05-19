import React from 'react'
import NavTop from '../../components/nav-top/NavTop'
import NavTab from '../../components/nav-bottom/NavTab'
import OsCard from '../../components/os-card/OsCard'
import { Grid, Container, makeStyles, ListItem, List} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroller';
import ScrollView from '../../components/scroll-view/ScrollView'


function Dashboard() {

    const orders = [
        {
            id: 1,
            order: 7855,
            status: "inProgress",
            type: "Obra",
            name: "Gelita do Brasil",
            description: "Troca de capacitores avariados",
            date: "20/02/2020 as 12:00h"

        },
       {
            id: 2,
            order: 7855,
            status: "inProgress",
            type: "Obra",
            name: "Gelita do Brasil",
            description: "Troca de capacitores avariados",
            date: "20/02/2020 as 12:00h"

        },
        {
            id: 3,
            order: 7855,
            status: "inProgress",
            type: "Obra",
            name: "Gelita do Brasil",
            description: "Troca de capacitores avariados",
            date: "20/02/2020 as 12:00h"

        },
        {
            id: 4,
            order: 7855,
            status: "complete",
            type: "Obra",
            name: "Gelita do Brasil",
            description: "Troca de capacitores avariados",
            date: "20/02/2020 as 12:00h"

        },
        {
            id: 5,
            order: 7855,
            status: "",
            type: "Obra",
            name: "Gelita do Brasil",
            description: "Troca de capacitores avariados",
            date: "20/02/2020 as 12:00h"

        }
    ]

    

    const [state, setState] = React.useState({

    })

    const listItems = orders.map((order) =>
        <li key={order.id}>
            <OsCard 
                status={order.status}
                type={order.type}
                serviceOrder={order.order}
                name={order.name}
                description={order.description}
                date={order.date}
            />
        </li>
    )

    return (
        <ScrollView height="100">
            <NavTop title="test" />
                <Container fluid>
                    <Grid alignContent="center">
                        <List>
                            {listItems}
                        </List>
                    </Grid>
                </Container>
            <NavTab/>
        </ScrollView>
    )
}


export default Dashboard
