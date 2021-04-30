import { fizzBuzz, fizzBuzzGenerate } from "../main/fizzbuzz";

describe("fizz buzz", () => {
  it("it should return fizz when the number is 3", () => {
    const number = 3;
    expect(fizzBuzz(number)).toStrictEqual("Fizz");
  });
  it("it should return fizz when the number is 6", () => {
    const number = 6;
    expect(fizzBuzz(number)).toStrictEqual("Fizz");
  });
  it("it should return buzz when the number is 5", () => {
    const number = 5;
    expect(fizzBuzz(number)).toStrictEqual("Buzz");
  });
  it("it should return buzz when the number is 10", () => {
    const number = 10;
    expect(fizzBuzz(number)).toStrictEqual("Buzz");
  });
  it("it should return the number itself when it is not a multiple of 3", () => {
    const number = 4;
    expect(fizzBuzz(number)).toStrictEqual("4");
  });
  it("it should return fizzbuzz when the number is 15", () => {
    const number = 15;
    expect(fizzBuzz(number)).toStrictEqual("FizzBuzz");
  });
  it("it should return fizzbuzz when the number is 30", () => {
    const number = 30;
    expect(fizzBuzz(number)).toStrictEqual("FizzBuzz");
  });
});

describe("fizzbuzz array", () => {
  it("should return fizz when a number in the array is multiple of 3", () => {
    const array = [1, 2, 3];
    expect(fizzBuzzGenerate(array)).toStrictEqual(["1", "2", "Fizz"]);
  });
  it("should return buzz when a number in the array is multiple of 5", () => {
    const array = [4, 5];
    expect(fizzBuzzGenerate(array)).toStrictEqual(["4", "Buzz"]);
  });
});
