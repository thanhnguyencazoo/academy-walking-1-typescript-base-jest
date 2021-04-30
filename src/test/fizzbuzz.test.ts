import { fizzBuzz } from "../main/fizzbuzz";

describe("fizz buzz", () => {
  it("it should return fizz when the number is 3", () => {
    const number = 3;
    expect(fizzBuzz(number)).toStrictEqual("Fizz");
  });
  it("it should return buzz when the number is 5", () => {
    const number = 5;
    expect(fizzBuzz(number)).toStrictEqual("Buzz");
  });
  it("it should return the number itself when it is not a multiple of 3", () => {
    const number = 4;
    expect(fizzBuzz(number)).toStrictEqual("4");
  });
});
