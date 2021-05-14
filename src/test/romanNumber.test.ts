import { romanize } from "../main/romanNumber";

describe("roman number", () => {
  it.each`
    integer | romanNumber
    ${0}    | ${""}
    ${1}    | ${"I"}
    ${2}    | ${"II"}
  `(
    "should return a '$romanNumber' when the number is '$integer'",
    ({ integer, romanNumber }) => {
      expect(romanize(integer)).toBe(romanNumber);
    }
  );
});
