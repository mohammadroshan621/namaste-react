import { render,screen } from "@testing-library/react"
import RestaurentCard from "../RestaurentCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import { withPromtedLabel } from "../RestaurentCard";
import "@testing-library/jest-dom";




it("should restaurent card component with props data", ()=>{
    render(<RestaurentCard resData={MOCK_DATA}/>)
    const name=screen.getByText("Alif Biryani point");
    expect(name).toBeInTheDocument();
})

 