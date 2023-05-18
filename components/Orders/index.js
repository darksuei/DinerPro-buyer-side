import FoodContainer from "./foodcontainer"
import CartScreen from "./cartContainer"
export default function OrderComponent (){
    return(
        <div className="flex items-start justify-between">
            <FoodContainer/>
            <CartScreen/>
        </div>
    )
}