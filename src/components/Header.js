import { LOGO_URL } from "../utilities/config";
import { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import UserContext from "../utilities/UserContext";
import { UseSelector } from "react-redux";

import useOnlineStautus from "../utilities/useOnlineStatus";
import { useSelector } from "react-redux";
 
const Header = ()=> {
 const [btnNameReact,setBtnNameReact]= useState("Login")

 const onlineStatus = useOnlineStautus();

 const {loggedInUser} = useContext(UserContext);
  
 // if no dependency array useEffect is called on every render
 // if dependency array is empty useEffect is called on initial render(just once)
 // if dependecny array is {btnaame react}called
 
 //subscribing the store using the selector , this useSelector gives access to the store
 const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-yellow-200 lg:bg-green-200">
            <div className="">
                <img className="w-32"
                src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 pb-10">
                    <li className="px-4">
                        Online status : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4"><Link to="/home">Home</Link></li>
                    <li> <Link to="/about">About us</Link></li>
                    <li className="px-4">
                        <Link to="/contact"> Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl"> <Link to="/cart"> Cart - ({cartItems.length}items)</Link></li>
                     <button className="login" onClick={() => {btnNameReact === "Login" ?setBtnNameReact("Logout"):setBtnNameReact("Login");}}>{btnNameReact}</button>

                     <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
