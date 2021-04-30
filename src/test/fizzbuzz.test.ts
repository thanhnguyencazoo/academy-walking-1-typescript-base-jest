import { fizzBuzz } from "../main/fizzbuzz";

describe("fizz buzz", () => {
  it("it should return fizz when the number is  3", () => {
    const array = [3];
    expect(fizzBuzz(array)).toBe("Fizz");
  });
});
