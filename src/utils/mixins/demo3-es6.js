/*
 * @Author: ly.guang
 * @Date: 2020-01-09 19:55:15
 * @Last Modified by: ly.guang
 * @Last Modified time: 2020-01-09 20:17:17
 * es6中的mixin继承
 */
class Serializable {
  constructor() {
    if (typeof this.constructor.stringify !== "function") {
      throw new ReferenceError("please define stringify method to the Class");
    }
    if (typeof this.constructor.parse !== "function") {
      throw new ReferenceError("please define parse method to the Class");
    }
  }
  toString() {
    return this.constructor.stringify(this);
  }
}

class Person extends Serializable {
  constructor(name, age, gender) {
    super();
    Object.assign(this, { name, age, gender });
  }
}

class Employee extends Person {
  constructor(name, age, gender, level, salary) {
    super(name, age, gender);
    this.level = level;
    this.salary = salary;
  }

  static stringify(employee) {
    let { name, age, gender, level, salary } = employee;
    return JSON.stringify({ name, age, gender, level, salary });
  }

  static parse(str) {
    let { name, age, gender, level, salary } = JSON.parse(str);
    return new Employee(name, age, gender, level, salary);
  }
}

let employee = new Employee("cai", 20, "f", 1, 100);
let employee2 = Employee.parse(employee + "");

console.log(
  employee2,
  employee2 instanceof Employee,
  employee2 instanceof Person,
  employee === employee2
);
