
var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      console.log("Assertion failed: " + assertionToCheck + " is not true");
    };
    console.log('Passed!')
  },

  isEqual: function(a, b) {
    if(a !== b) {
      console.log("a:" + a);
      console.log("b:" + b);
      console.log("Assertion failed: " + a + "doesn't equal" + b);
    };
    console.log('Passed!')
    console.log(a)
    console.log('is equal to:')
    console.log(b)
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
