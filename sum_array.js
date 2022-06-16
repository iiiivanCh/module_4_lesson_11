"use strict";

const arrNew = [0, 5, 4];

const doSumArray = (arr) => {
  const newArr = Array.from(arr);

  (function doNewAArr() {
    const arrayMember = Math.trunc(Math.random() * 11);
    newArr.push(arrayMember);
    const sum = newArr.reduce((acc, val) => acc + val);
    if (sum > 50) {
      return;
    }
    doNewAArr();
  })();

  return newArr;
};

doSumArray(arrNew);

console.log(arrNew);
console.log(doSumArray(arrNew));
