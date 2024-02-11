import React,{lazy, Suspense,useEffect,useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import RestaurentMenu from "./components/RestaurentMenu"; 
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";
import Cart from "./components/Cart";

//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading

const Grocery = lazy(() =>import("./components/Grocery"));

const AppLayout = ()=> {

    const  [userName,setUserName] = useState();

    useEffect(() => {
        const data = {
            name:"roshan",
        }
        setUserName(data.name);
    }, []);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName,setUserName}}> 

        <div className="app">

            <Header/>
 
            <Outlet/>

       
        </div>
        </UserContext.Provider>
        </Provider>

    );
};

const appRouter = createBrowserRouter([
     
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>loading please wait .....</h1>}><Grocery/></Suspense>

            },
            {
                path:"/home",
                element:<Home/>  ,
            },
            {
                path:"/restaurent/:resId",
                element:<RestaurentMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            }

        ],
        errorElement:<Error/>,
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);