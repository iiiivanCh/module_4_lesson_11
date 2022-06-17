"use strict";

const arrNew = [0, 5, 4];
const newArr = Array.from(arrNew);

const doSumArray = (arr) => {
  const arrayMember = Math.trunc(Math.random() * 11);
  arr.push(arrayMember);
  const sum = arr.reduce((acc, val) => acc + val);
  if (sum > 50) {
    return arr;
  }
  doSumArray(arr);
};

doSumArray(newArr);

console.log(arrNew);
console.log(doSumArray(newArr));
