import { romanize } from "../main/romanNumber";
describe("roman number", () => {
  it("return I when the number is 1", () => {
    expect(romanize(1)).toBe("I");
  });

  it("return II when the number is 2", () => {
    expect(romanize(2)).toBe("II");
  });

  it("return III when the number is 3", () => {
    expect(romanize(3)).toBe("III");
  });
});
