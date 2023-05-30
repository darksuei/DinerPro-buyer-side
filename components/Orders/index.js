import FoodContainer from "./foodcontainer";
import CartScreen from "./cartcontainer";
export default function OrderComponent() {
  return (
    <div className="flex items-start justify-between px-12">
      <FoodContainer />
      <CartScreen />
    </div>
  );
}
