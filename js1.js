"use strict";

const restangle = {

  get perimeter() {
    return (this._width + this._height) * 2 + "см";
  },
  get square() {
    return `${this._width * this._height}см2`;
  },
  set width(valueW) {
    this._width = valueW;
  },
  set height(valueH) {
    this._height = valueH;
  },
};

restangle.height = 5;
restangle.width = 5;
console.log(restangle.perimeter);
console.log(restangle.square);
console.log(restangle.width);
console.log(restangle.height);
console.log(restangle._width);
console.log(restangle._height);

