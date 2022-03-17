const getTheTitles = function (array) {
  let titles = [];
  array.forEach((obj) => titles.push(obj.title));
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
