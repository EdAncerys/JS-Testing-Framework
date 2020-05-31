'use strict';

it('should be able to compare 2 + 2 is 4', () => {
  expect(sumOfNumbers(2, 2)).toEqual(4)
})

it('should be able to compare strings', () => {
  expect(compareIfStringsEqual('Hello')).toEqual('Hello')
})

it('should be able to FAIL if NOT equal', () => {
  expect(compareIfStringsEqual('Hello')).notToEqual('Good Bye')
})