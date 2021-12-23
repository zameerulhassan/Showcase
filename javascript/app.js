//simple class
class DemoClass {
  constructor(options) {
    console.log(`I am constructed with ${options} options`);
    this.options = options;
  }
}

const demo = new DemoClass("Hello World Dec 2021");
