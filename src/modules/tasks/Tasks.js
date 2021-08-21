import React from 'react'
import useTasks from './useTasks'
import BasicTable from '../../components/table/Table'
import { useSelector } from 'react-redux'
import { LinearProgress } from '@material-ui/core'

export default function Tasks() {
    const [taskState] = useTasks()
    const List = useSelector(store => store.DbReducer.newState)

    return (
        <div>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>TODO APP</i></b></h1>
            </div>
            <div style={styles.tableDiv}>
                <BasicTable List={List} />
                {taskState ? <LinearProgress /> : null}
            </div>
        </div>
    )
}

const styles = {
    text: {
        color: '#ee5c23',
        textAlign: 'center'
    },
    textDiv: {
        marginTop: 20,
        marginBottom: 20,
        borderBottom: 'ridge',
        backgroudColor: "white"
    },
    tableDiv: {
        width: '80%',
        margin: "auto"
    }
}