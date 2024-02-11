import RestaurentCard, {withPromtedLabel} from "./RestaurentCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStautus from "../utilities/useOnlineStatus"; 
import UserContext from "../utilities/UserContext";
  
const Body = ()=> {

    const [listOfRestaurent,setListOfRestaurent ]=useState([]);
    const [filteredRestaurent,setfilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");

    const RestaurentCardPromted = withPromtedLabel(RestaurentCard);

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.013401&lng=81.787213&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"            );

        const json = await data.json();

        console.log(
            json);
        setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };

       const onlineStatus = useOnlineStautus();
        if (onlineStatus === false) 
         return (
          <h1>
             Look like offline please check your internet connection;
        
        </h1>
        );

        const{loggedInUser,setUserName} = useContext(UserContext);
     

     if (listOfRestaurent.length===0){
        return <h1><Shimmer/></h1>
     }

      

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" placeholder="Search" className="border border-solid border-black" value={searchText} onChange={(e)=> {setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick={()=> {console.log(searchText);
                   const filteredRestaurent= listOfRestaurent.filter((res)=> res.info.name.toLowerCase( ).includes(searchText));
                   setfilteredRestaurant(filteredRestaurent);
                    
                    } }>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center "> 
                <div className="m-4 p-4 flex items-center">
                    <label className="px-2">UserName</label>
                    <input className="border-black p-2" value={loggedInUser}
                     onChange={(e) => setUserName(e.target.value)}/>

                </div>
                </div>
                
            </div>

            <div className="flex flex-wrap">
              {
                filteredRestaurent.map((restaurent)=>(
                <Link to={"/restaurent/"+restaurent.info.id}>

                    {restaurent.info.aggregatedDiscountInfoV3?(
                     <RestaurentCardPromted resData={restaurent}/>):(<RestaurentCard resData={restaurent}
                    />)}
                    </Link>))
              }

            </div>

        </div>

    )
}
export default Body;