class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  };
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  };
}

class Rectangle extends Quadrilateral {
  constructor(sideL, sideW) {
    super(sideL, sideW, sideL, sideW)
  };
  getArea() {
    return this.side1 * this.side2;
  };
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  };
  getDiagonal() {
    return (Math.sqrt(2)) * this.side1;
    //Math.sqrt((this.side1 * this.side1)*2)
  };
}

/* Be creative with this one! */
class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
