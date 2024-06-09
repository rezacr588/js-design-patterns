// Module Pattern
const MyModule = (function() {
  // Private variables and functions
  let privateData = [];

  function privateFunction(data) {
    privateData.push(data);
  }

  // Public interface
  return {
    publicFunction: function(data) {
      privateFunction(data);
    },
    getPrivateData: function() {
      return privateData;
    }
  };
})();

// Usage
MyModule.publicFunction('Hello');
MyModule.publicFunction('World');
console.log(MyModule.getPrivateData()); // Output: ['Hello', 'World']

// Attempt to access private members directly
console.log(MyModule.privateData); // undefined
console.log(MyModule.privateFunction); // undefined