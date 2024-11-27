const findTheOldest = function (array) {
  return array
    .map((person) => ({
      ...person,
      age: person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth,
    }))
    .sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
