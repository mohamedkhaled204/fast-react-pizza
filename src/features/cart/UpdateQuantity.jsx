import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <small className="text-sm">{currentQuantity}</small>
            <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateQuantity
