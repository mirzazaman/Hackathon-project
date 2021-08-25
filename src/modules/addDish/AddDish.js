import React from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import useAddDish from './useAddDish'


export default function AddDish() {
    const [dishName, setDishName, enterHandle, addDishHandle, addTaskState, price, setPrice, category, setCategory, deliveryType, setDeliveryType, setFoodImage] = useAddDish()

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
                            placeholder="Dish Name"
                            required
                            autoFocus
                            value={dishName}
                            onChange={(e) => { setDishName(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <input
                            style={styles.input}
                            type="number"
                            placeholder="Price in PKR"
                            required
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }}
                            onKeyPress={(e) => { enterHandle(e) }}
                        />
                        <select
                            style={styles.input}
                            value={category}
                            required
                            onChange={(e) => { setCategory(e.target.value) }}
                        >
                            <option selected disabled>Select Category</option>
                            <option>Meat Dish</option>
                            <option>Breakfast</option>
                            <option>Dessert</option>
                            <option>Flatbread</option>
                            <option>Stew</option>
                            <option>Mutton Dish</option>
                            <option>Street Food</option>
                            <option>Snack</option>
                        </select>
                        <input
                            style={styles.input}
                            type="file"
                            accept="image/*"
                            onChange={(e) => {setFoodImage(e.target.files[0])}}
                        />
                        <select
                            style={styles.input}
                            value={deliveryType}
                            required
                            onChange={(e) => { setDeliveryType(e.target.value) }}
                        >
                            <option selected disabled>Select Delivery Type</option>
                            <option>Free</option>
                            <option>Paid</option>
                        </select>
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
        margin: '.5rem',
        border: 'none',
        borderBottom: 'ridge',
        fontSize: 17,
        padding: 5
    }
}