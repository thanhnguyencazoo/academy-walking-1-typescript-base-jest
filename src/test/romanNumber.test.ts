import { romanize } from "../main/romanNumber";
describe("roman number", () => {
  it("return I when the number is 1", () => {
    expect(romanize(1)).toBe("I");
  });
});
