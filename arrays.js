var chocolateBars = ["snickers",`hundred grand`,`kitkat`,`skittles`]

addElementToBeginningOfArray  = (array,element) =>
  {return  [element,...array] }

destructivelyAddElementToBeginningOfArray  = (array,element) =>
  {array.unshift(element)
  return array}

addElementToEndOfArray = (array,element) =>
  {return [...array,element]}

destructivelyAddElementToEndOfArray = (array,element) =>
  {array.push(element)
  return array}

accessElementInArray = (array, index) =>
 {return array[index]}

 destructivelyRemoveElementFromBeginningOfArray = (array) =>
 {array.shift()
 return array}

 removeElementFromBeginningOfArray = (array) =>
 {return array.slice(1)}

 destructivelyRemoveElementFromEndOfArray = (array) =>
  {array.pop()
  return array}

  removeElementFromEndOfArray = (array) =>
  {return array.slice(0, array.length - 1)}
