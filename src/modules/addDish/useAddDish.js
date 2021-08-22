import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addDish } from "../../store/actions/DbAction"

export default function useAddDishies() {
    const [dishName, setDishName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [deliveryType, setDeliveryType] = useState('')
    const [foodImage, setFoodImage] = useState(null)
    const dispatch = useDispatch()
    const [addTaskState, setAddTaskState] = useState()

    const enterHandle = (e) => {
        if (e.charCode === 13) {
            addDishHandle()
        }
    }

    const addDishHandle = () => {
        if (dishName.length === 0 || price.length === 0) {
            return

        } else {
            let data = {
                dishName,
                price,
                category,
                deliveryType,

            }
            dispatch(addDish(data, foodImage, setAddTaskState))
            // console.log("image", foodImage);

            setDishName('');
            setPrice('');
            setFoodImage(null);
            setDeliveryType('Select Delivery Type')
            setCategory('Select Category')
        }
    }

    return [dishName, setDishName, enterHandle, addDishHandle, addTaskState, price, setPrice, category, setCategory, deliveryType, setDeliveryType, setFoodImage]
}