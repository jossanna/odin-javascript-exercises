const palindromes = function (string) {
  const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverse = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("");
  return reverse === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
