
import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utilities/useRestaurentMenu";
import { MENU_API } from "../utilities/config";
import RestaurentCategory from "./RestaurentCategory";
 
const RestaurentMenu = () =>{

 
    const {resId} = useParams();

   const resInfo= useRestaurentMenu(resId);

   const[showIndex,setShowIndex] = useState(null);

    
    if (resInfo === null) return <Shimmer/>
 
    const {name,cuisines,areaName,totalRatingsString,costForTwoMessage} = resInfo.cards[0]?.card?.card?.info;

 

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    if(categories === null) return <Shimmer/>

 
     
 
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(" ")} -{costForTwoMessage} </p>

            {categories.map((category,index) =>(
                //controlled component
                <RestaurentCategory key={category.card?.card.title} data={category?.card?.card} 
                showItems={index===showIndex ?true:false}
                setShowIndex= {() => setShowIndex(index)}
                />
                
            ))}

            
            
             
              
           
        </div>
    )
}
export default RestaurentMenu;