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
    console.log(this.step);
  },
};
