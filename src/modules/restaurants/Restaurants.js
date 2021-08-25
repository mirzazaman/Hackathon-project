import React from 'react'
import useRestaurants from './useRestaurants'
import { useSelector } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import CoverImage from '../../assets/CoverImage.png'
import RestCard from '../../components/restCards/RestCards'

export default function Restaurants() {
    const [taskState, RestaurantList] = useRestaurants()
    
    return (
        <div>
            <center>
                <img style={{ width: '100%', height: 'auto' }} src={CoverImage} />
            </center>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>RESTAURANTS</i></b></h1>
            </div>
            <div style={styles.tableDiv}>
                <RestCard RestaurantList={RestaurantList}/>
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
        width: '100%',
        margin: "auto"
    }
}