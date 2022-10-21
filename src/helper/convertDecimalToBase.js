const equivalentHexaChar = (num) => {
  return num >= 0 && num <= 9
    ? String.fromCharCode(num + 48)
    : String.fromCharCode(num - 10 + 65);
};

export const convert = (num, base) => {
  const result = [];
  while (num !== 0) {
    result.push(equivalentHexaChar(num % base));
    num = Math.trunc(num / base);
  }
  return result.reverse().join("");
};
