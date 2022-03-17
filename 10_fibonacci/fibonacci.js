const fibonacci = function (number) {
  if (number < 0) {
    return "OOPS";
  }
  let firstTerm = 1;
  let secondTerm = 1;
  for (let i = 2; i < number; i++) {
    [firstTerm, secondTerm] = [secondTerm, secondTerm + firstTerm];
  }
  return secondTerm;
};

// Do not edit below this line
module.exports = fibonacci;
