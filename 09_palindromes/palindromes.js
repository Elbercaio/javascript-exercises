const palindromes = function (string) {
  let bareString = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s+]/g, "")
    .toLowerCase();
  let reversed = bareString.split("").reverse().join("");
  if (reversed === bareString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
