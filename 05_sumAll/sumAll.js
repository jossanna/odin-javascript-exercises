const sumAll = function (val1, val2) {
  let total = 0;
  if (
    val1 < 0 ||
    val2 < 0 ||
    !Number.isInteger(val1) ||
    !Number.isInteger(val2)
  ) {
    return "ERROR";
  }
  let min = Math.min(val1, val2);
  let max = Math.max(val1, val2);
  for (min; min <= max; min++) {
    total += min;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
