const {sum, subtract} = require("./function")

// description of what the test is about
test("Sum 2 + 5 is equal 7", () =>{
    expect(sum(2,5)).toBe(7);
})

test("Subtract 5 - 2 is equal 3", () =>{
    expect(subtract(5,2)).toBe(3);
})