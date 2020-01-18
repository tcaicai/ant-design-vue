let sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
};
let sayHiMixin = {
  __proto__: sayMixin,
  sayHi() {
    super.say(`hello ${this.name}`);
  },
  sayBye() {
    super.say(`bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User("cai").sayHi();
