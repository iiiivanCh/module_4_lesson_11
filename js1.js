"use strict";

const restangle = {
  _height: 5,
  _width: 5,

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

// height = 40;
// width = 40;
console.log(restangle)
console.log(restangle.perimeter);
console.log(restangle.square);
console.log(restangle.width = 40);
console.log(restangle.height = 40);
console.log(restangle.perimeter);
console.log(restangle.square);
console.log(restangle._width);
console.log(restangle._height);
console.log(restangle)

