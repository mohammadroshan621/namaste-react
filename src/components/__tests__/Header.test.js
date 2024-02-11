import { fireEvent, render, screen} from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utilities/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";


test("should load header component with a login button", () => {
    render(

    <BrowserRouter>
    <Provider store={appStore}>

    <Header/>
    </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
 })

 
test("should load header component with a cart items 0", () => {
    render(

    <BrowserRouter>
    <Provider store={appStore}>

    <Header/>
    </Provider>
    </BrowserRouter>
    );
     const cartItems = screen.getByText("Cart - (0items)");
     expect(cartItems).toBeInTheDocument();
 })

 test("should load header component with a cart items 0", () => {
    render(

    <BrowserRouter>
    <Provider store={appStore}>

    <Header/>
    </Provider>
    </BrowserRouter>
    );
     const loginButton = screen.getByRole("button", {name:"Login"})

     fireEvent.click(loginButton);

     const logoutButton = screen.getByRole("button", {name:"Logout"})
     expect(logoutButton).toBeInTheDocument();
 })

  