import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import useAddTasks from './useAddTasks'


export default function AddTasks() {
    const [task, setTask, enterHandle, taskHandler, addTaskState] = useAddTasks()

    return (
        <div>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>ADD TODO</i></b></h1>
            </div>
            {
                addTaskState ? <center><CircularProgress style={{color:'#ee5c23'}} size={50} /></center> :

                    <div style={styles.formDiv}>
                        <input
                            style={styles.input}
                            type="text"
                            placeholder="Task"
                            required
                            autoFocus
                            value={task}
                            onChange={(e) => { setTask(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <Button style={{ color: '#ee5c23', marginTop: 10 }} onClick={taskHandler} >Add</Button>
                    </div>
            }
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
        marginBottom: 40,
        borderBottom: 'ridge',
        backgroudColor: "white"
    },
    formDiv: {
        display: 'grid',
        width: '200px',
        margin: "auto"
    },
    input: {
        border: 'none',
        borderBottom: 'ridge',
        fontSize: 17,
        padding: 5
    }
}