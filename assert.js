
var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not true");
    };
  },

  isEqual: function(a, b) {
    if(a !== b) {
      console.log("a:" + a);
      console.log("b:" + b);
      throw Error("Assertion failed: " + a + "doesn't equal" + b);
    };
  },

  throwsError: function(object, errorFunction) {

    try {
      eval(object);
      eval(errorFunction);
    }
    catch(errorMessage) {
      console.log('Error has occured: ' + errorMessage)
      console.log('Test passed')
    }
  }
}
