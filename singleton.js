class SingletonClass {
  constructor() {
    // Private instance variable
    if (!SingletonClass.instance) {
      this.data = [];
      SingletonClass.instance = this;
    }

    // Returns the existing instance if it already exists
    return SingletonClass.instance;
  }

  // Methods to work with the instance
  addData(value) {
    this.data.push(value);
  }

  getData() {
    return this.data;
  }
}

// Usage example
const instance1 = new SingletonClass();
const instance2 = new SingletonClass();

console.log(instance1 === instance2); // true

instance1.addData(10);
instance1.addData(20);

console.log(instance2.getData()); // Output: [10, 20]