let eventMixin = {
  on(eventName, handler) {
    if (!this._eventHanders) this._eventHanders = {};
    if (!this._eventHanders[eventName]) this._eventHanders[eventName] = [];

    this._eventHanders[eventName].push(handler);
  },
  off(eventName, handler) {
    let handlers = this._eventHanders && this._eventHanders[eventName];

    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },
  trigger(eventName, ...args) {
    if (!this._eventHanders || !this._eventHanders[eventName]) {
      return;
    }
    this._eventHanders[eventName].forEach(handler => {
      handler.apply(this, args);
    });
  }
};

class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}

Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();

menu.on("select", value => {
  console.log("menu select", value);
});
menu.choose("124");
