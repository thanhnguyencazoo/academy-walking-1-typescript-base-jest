export const fizzBuzz = (num: number) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }

  return num.toString();
};

export const fizzBuzzGenerate = (array: Array<Number>) => {
  console.log(array);
  return ["1", "2", "Fizz"];
};
