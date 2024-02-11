import { sum } from "../sum"
test("sum 0f numbers to be calculated", () =>{
    const result = sum(33,2)
    expect(result).toBe(35)
})