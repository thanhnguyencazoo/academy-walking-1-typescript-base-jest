import { romanize } from "../main/romanNumber";
describe("roman number", () => {
  it("return I when the number is 1", () => {
    expect(romanize(1)).toBe("I");
  });
  it("return I when the number is 2", () => {
    expect(romanize(1)).toBe("II");
  });
});
