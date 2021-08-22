import React from 'react'
import useTasks from './useRestaurants'
import { useSelector } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import Cards from '../../components/cards/Cards'
import CoverImage from '../../assets/CoverImage.png'

export default function Restaurants() {
    const [taskState, RestaurantList] = useTasks()
    const List = useSelector(store => store.DbReducer.newState)
    
    return (
        <div>
            <center>
                <img style={{ width: '100%', height: 'auto' }} src={CoverImage} />
            </center>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>RESTAURANTS</i></b></h1>
            </div>
            <div style={styles.tableDiv}>
                <Cards RestaurantList={RestaurantList}/>
                {taskState ? <LinearProgress /> : null}
            </div>
        </div>
    )
}

const styles = {
    text: {
        color: '#030504',
        textAlign: 'center',
    },
    textDiv: {
        marginTop: 20,
        marginBottom: 20,
        borderBottom: 'ridge',
    },
    tableDiv: {
        width: '80%',
        margin: "auto"
    }
}