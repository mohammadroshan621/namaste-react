import { CDN_URL } from "../utilities/config";
import { UseDispatch, useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";
const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        //dispatch an action
        dispatch(addItem(item))
    }
     
    
     return (
     <div>
        {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex">

            <div className="w-9/12">
            <div className="py-2">
                <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price/100}</span>

            </div>
            <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
            <button className="p-2 mx-2 rounded-lg bg-white text-green-500 font-bold shadow-lg " 
            onClick = {() => handleAddItem(item)}>ADD +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="" className="w-full rounded-lg"/>
            
            </div>


            </div>))}
     </div>
           
     ); 
}

export default ItemList;