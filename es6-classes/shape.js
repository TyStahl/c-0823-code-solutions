/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `area:${this.area} perimeter:${this.perimeter}`;
  }
}

const shape1 = new Shape(5, 10);
console.log(shape1.describe());
