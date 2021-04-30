export const fizzBuzz = (num: number) => {
  if (num === 3) {
    return "Fizz";
  }
  if (num === 5) {
    return "Buzz";
  }
  return num.toString();
};
