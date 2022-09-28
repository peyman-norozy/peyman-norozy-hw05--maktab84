let pedometer = {
  step: 0,
  increase() {
    this.step += 1;
  },
  decrease() {
    this.step -= 1;
  },
  reset() {
    this.step = 0;
  },
  read() {
    alert(this.step);
  },
};

while (true) {
  let entery = prompt("you can set (inc, dec, res, read):");
  if (entery === "inc") {
    pedometer.increase();
  } else if (entery === "dec") {
    pedometer.decrease();
  } else if (entery === "res") {
    pedometer.reset();
  } else if (entery === "read") {
    pedometer.read();
  } else {
    break;
  }
}
