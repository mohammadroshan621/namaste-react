import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        
    }

    const cartItems = useSelector((store) => store.cart.items);
    return <div className="text-center m5 p-5">

        <h1 className="text-2xl font-bold">Cart</h1>

        <div className="w-6/12 m-auto ">
          <button className="p-3 m-2 bg-black text-white rounded-xl"
           onClick ={handleClearCart} > clear cart
            </button> {cartItems.length === 0 && (<h1 className="">Cart is empty Add Items to the cart</h1>)} 
           <ItemList items = {cartItems}/>
        </div>

    </div>
}
export default Cart;