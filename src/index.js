var chinesePoems = require("./chinese-poems.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: chinesePoems,
  random: uniqueRandomArray(chinesePoems)
};
