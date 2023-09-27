/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    return `${super.describe()}, width:${this.width}`;
  }
}

const square1 = new Square(5);
console.log(square1.describe());
