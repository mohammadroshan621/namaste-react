import { useContext } from "react";

import { CDN_URL } from "../utilities/config";
import UserContext from "../utilities/UserContext";
  const RestaurentCard = (props)=>{
    const {resData}=props;
    console.log(resData);

    const {loggedInUser} = useContext(UserContext);
   
    const {
      name,
      cloudinaryImageId,
      cuisines,
      avgRating,
      sla,
      costForTwo,avgRatingString,
      }
       = resData?.info;
  
    return (
        <div 
        data-testid="resCard"
        className="m-4 p-4 w-[260px] rounded-lg bg-gray-200 hover:bg-gray-300">
            <img className="rounded-lg"
             alt="res-logo "src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(",")} </h4>
            <h4>{"⭐"}{avgRating} </h4>
             <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{loggedInUser}</h4>
         </div>
    )
  };

export const withPromtedLabel = (RestaurentCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-red-400 text-white m-2 p-2 rounded-lg">₹125 OFF ABOVE ₹199</label>
                <RestaurentCard {...props}/>
            </div>
        )
    }
}

  export default RestaurentCard;
  