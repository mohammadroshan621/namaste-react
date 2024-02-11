import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases", () =>{
    test("should load contact us component", () =>{

        render(<Contact/>)
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    
    })
    
    test("should load button inside my contact us component", () =>{
    
        render(<Contact/>)
        const button = screen.getByText("Submit");
        
        expect(button).toBeInTheDocument();
    
    })
    
     
    
    test("should load input name inside my contact us component", () =>{
    
        render(<Contact/>)
        const inputName = screen.getByPlaceholderText("name");
        
        expect(inputName).toBeInTheDocument();
    
    })
    
    test("should load 2 input boxes on the contact component", () =>{
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).not
    
    })
    
     
})