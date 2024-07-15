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
    this.side1 = sideL;
    this.side2 = sideW;
    this.side3 = sideL;
    this.side4 = sideW;
  };
  // getPerimeter() {
  //   // super.getPerimeter()
  //   return this.side1* 2 + this.side2 * 2 
  // };
  getArea() {
    return this.side1 * this.side2;
  };
}

// const rect = new Rectangle(10, 5);
// const quad = new Quadrilateral(6, 7, 5, 9);
// // expect(rect instanceof Quadrilateral).toBe(true);
// console.log(rect.getPerimeter())
// console.log(quad.getPerimeter());

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

const test = new Person("dream", ["todo1", "todo2", "todo3"], 1111);
console.log(test.find(1111))