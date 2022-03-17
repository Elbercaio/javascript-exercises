const findTheOldest = function (people) {
  const oldest = people.sort((a, b) =>
    ("yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear()) -
      a.yearOfBirth >
    ("yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear()) -
      b.yearOfBirth
      ? -1
      : 1
  );
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
