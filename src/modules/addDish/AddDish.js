import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import useAddDish from './useAddDish'


export default function AddDish() {
    const [dishName, setDishName, enterHandle, addDishHandle, addTaskState] = useAddDish()

    return (
        <div>
            <div style={styles.textDiv}>
                <h1 style={styles.text}><b><i>ADD DISH</i></b></h1>
            </div>
            {
                addTaskState ? <center><CircularProgress style={{ color: '#030504' }} size={50} /></center> :

                    <div style={styles.formDiv}>
                        <input
                            style={styles.input}
                            type="text"
                            placeholder="Item Name"
                            required
                            autoFocus
                            value={dishName}
                            onChange={(e) => { setDishName(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <Button style={{ color: '#030504', marginTop: 10 }} onClick={addDishHandle} >Add</Button>
                    </div>
            }
        </div>
    )
}

const styles = {
    text: {
        color: '#030504',
        textAlign: 'center'
    },
    textDiv: {
        marginTop: 100,
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