'use strict';

(function(exports) {

  const PASS_MESSAGE = 'PASS'
  const FAIL_MESSAGE = 'FAIL'
  const END_OF_TEST_MESSAGE = '* End Test Line *'

  function it(input, callback) {
    console.log(`Test: ${input}`)
    callback()
    console.log(END_OF_TEST_MESSAGE)
  }

  function expect(actual) {
    return {
      toEqual: function(expected) {
        if(actual === expected) {
          console.log(PASS_MESSAGE)
        } else {
          console.log(FAIL_MESSAGE)
        }
      },

      notToEqual: function(expected) {
        if(actual !== expected) {
          console.log(PASS_MESSAGE)
        } else {
          console.log(FAIL_MESSAGE)
        }
      },

      toBeAnArray: function(expected) {
        if(actual.constructor.name === 'Array') {
          console.log(PASS_MESSAGE)
        } else {
          console.log(FAIL_MESSAGE)
        }
      }
    }
  }

  exports.it = it
  exports.expect = expect 

})(this)