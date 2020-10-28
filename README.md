# JavaScript Arrays

## Objectives

- Explain what an array is and why we use it
- Create an array
- Add an element to an array
- Access an element in an array
- Delete an element from an array

## Instructions

You'll be coding along in `arrays.js`. There are tests to run to make sure you're on the right track.

## Introduction

In JavaScript, we can group like items in an object (well, everything in JavaScript is an object — but more on that some other time) called an _array_. An array is an ordered list of items (called "elements" of the array) separated by commas.

Arrays look like this: `[1, 2, 3]`.

Or like this:

``` javascript
var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]
```

1. In `arrays.js`, define a variable called `chocolateBars`. Its value should be an array of the strings `snickers`, `hundred grand`, `kitkat`, and `skittles`.

2. In `arrays.js`, define two functions, `addElementToBeginningOfArray` and `destructivelyAddElementToBeginningOfArray`. Both functions take two parameters, an array and an element to add to the beginning of the array, and both functions should add the element to the beginning of the array and then return the whole array. The destructive function, `destructivelyAddElementToBeginningOfArray`, should alter the original array that's passed in; `addElementToBeginningOfArray`, on the other hand, should return a new array **and not modify the original**.

3. Define two more functions, `addElementToEndOfArray` and `destructivelyAddElementToEndOfArray`. These functions also take two arguments, an array and an element to add to the end of the array. `addElementToEndOfArray` **should not** alter the original array; `destructivelyAddElementToEndOfArray` **should** alter the original array.

4. Define a function in `arrays.js` called `accessElementInArray`. The function should accept an array and an index and return the element at that index.

5. Define a function in `arrays.js` called `destructivelyRemoveElementFromBeginningOfArray` that takes an array as its only argument and removes the first element. Your function should then return the entire array, and it **should** mutate the array.

6. Define a function in `arrays.js` called `removeElementFromBeginningOfArray`. It takes an `array` as its only argument. The function should remove the first element in the array. This function should return the _entire_ array in the same line, and it **should not** mutate the original array.

7. Define a function in `arrays.js` called `destructivelyRemoveElementFromEndOfArray` that takes an array as its only argument and removes the last element. Your function should return the entire array, and it **should** mutate the array.

8. Define a function in `arrays.js` called `removeElementFromEndOfArray` that takes an array as its only argument and removes the last element. Your function should return the array without the last element, and it **should not** mutate the original array.
