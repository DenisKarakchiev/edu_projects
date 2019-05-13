// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example:
//
// summation(2) -> 3
// 1 + 2
//
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

let summation = function(num) {
  // Code here
  let arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }

  let summ = 0;
  arr.forEach(function(item) {
    summ += item;
  });

  return summ;
};

// -------------------------------------

