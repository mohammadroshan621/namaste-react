import { fireEvent, render ,screen} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import Body from "../Body"
 import MOCK_DATA from "../mocks/mockRestaurentList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
 
global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search res list for panchavati text input", async ()=>{

    await act(async() =>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ))
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(9);

    const searchbtn=screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"panchavati"}})
    fireEvent.click(searchbtn)
    const cardsAfterSearch=screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);

   
 })