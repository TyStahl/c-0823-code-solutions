/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, Math.PI * radius * 2);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, radius:${this.radius}`;
  }
}

const circle1 = new Circle(5);
console.log(circle1.describe());
