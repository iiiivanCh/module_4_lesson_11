"use strict";

const arrNew = [0, 5, 4];

const doSumArray = (arr) => {
  const newArr = Array.from(arr);
  const sum = newArr.reduce((acc, val) => acc + val);
  const arrayMember = Math.trunc(Math.random() * 11);
  if (sum > 50) {
    return newArr;
  }
  newArr.push(arrayMember);
  return doSumArray(newArr);
};

doSumArray(arrNew);

console.log(arrNew);
console.log(doSumArray(arrNew));