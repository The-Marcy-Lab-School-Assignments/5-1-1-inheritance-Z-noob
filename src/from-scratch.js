/** FEEDBACK: Great job!!!! */
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
  /** FEEDBACK: This could go in the rectangle class since we can get the diagonal of a rectangle! */
  getDiagonal() {
    return (Math.sqrt(2)) * this.side1;
    //Math.sqrt((this.side1 * this.side1)*2)
  };
}

/* Be creative with this one! */
class Person {
  #private = [];
  constructor(data1, data2, data3) {
    this.data1 = data1;
    this.data2 = data2;
    this.data3 = data3;
    this.#private.push(this);
  };
  starterConvo() {
    return `Hello! One of the dream is ${this.data1}`;
  };
  todos() {
    return this.data2.gorEach((todo) => {return console.log(`Todo ${todo}`)});
  };
  age(presentYear) {
    return presentYear - this.data3;
  };
  list() {
    return [...this.#private];
  };
  find(birth) {
    return this.#private.find(obj => obj.data3 === birth)
  };
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
