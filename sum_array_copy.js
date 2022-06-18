"use strict";

const arrNew = [0, 5, 4];

const doSumArray = (arr) => {
  const newArr = Array.from(arr);
  const sum = newArr.reduce((acc, val) => acc + val, 0);
  const arrayMember = Math.trunc(Math.random() * 11);
  newArr.push(arrayMember);
  return sum > 50 ? newArr : doSumArray(newArr);
};

doSumArray(arrNew);

console.log(arrNew);
console.log(doSumArray(arrNew));
