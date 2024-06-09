// Observer interface defines the update method
class Observer {
  update(subject) {
    throw new Error('You must implement the update method in the Observer');
  }
}

// Subject maintains a list of observers and provides methods to attach, detach, and notify them
class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    if (!observer instanceof Observer) {
      throw new Error('Observer must implement the Observer interface');
    }
    this.observers.push(observer);
  }

  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

// Concrete observer implementation
class ConcreteObserver extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update(subject) {
    console.log(`${this.name} received an update from ${subject}`);
  }
}

// Example usage
const subject = new Subject();

const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify(); // Output: Observer 1 received an update from Subject
                  //         Observer 2 received an update from Subject

subject.detach(observer1);

subject.notify(); // Output: Observer 2 received an update from Subject