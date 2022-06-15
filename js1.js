"use strict";

const restangle = {
  // width: '5см',
  // height: '5см',

  get width() {
    return this._width + 'см';
  },
  get height() {
    return this._height + 'см';
  },
  get perimeter() {
    return (this._width + this._height) * 2 + 'см';
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
}

console.log(restangle.width);
console.log(restangle.height);

// height = 100;
// width = 100;
console.log(restangle);
restangle.width = 40;
restangle.height = 40;
console.log(restangle.perimeter);
console.log(restangle.square);
console.log(restangle.width);
console.log(restangle.height);
console.log(restangle);
