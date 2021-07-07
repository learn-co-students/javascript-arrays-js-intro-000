var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = array;
    const myNewArray = new Array(`${element}`, ...myArray);
  return myNewArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(`${element}`);
    return array;
}

function addElementToEndOfArray(array, element) {
  const myArray = array;
    const myNewArray = new Array(...myArray, `${element}`);
  return myNewArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(`${element}`);
    return array;
}

function accessElementInArray(array, index) {
  var accessArray = array;
  return accessArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
      array.shift();
    return array;
}

function removeElementFromBeginningOfArray(array) {
  const myArray = array;
    const myNewArray = myArray.slice(1);
  return myNewArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
      array.pop();
    return array;
}

function removeElementFromEndOfArray(array) {
  const myArray = array;
    const myNewArray = myArray.slice(0, myArray.length -1);
  return myNewArray;
}

/*
  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the array with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the array', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];

      removeElementFromBeginningOfArray(array);

      expect(array).to.eql([1, 2, 3]);
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })

    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })

  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })

    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})

*/
