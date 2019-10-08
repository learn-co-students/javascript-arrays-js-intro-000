var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars){
const moreChocolateBars=["foo",... chocolateBars];
return moreChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars){
chocolateBars.unshift("foo");
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars){
  const moreChocolateBars=[...chocolateBars,"foo"];
  return moreChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars){
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray(chocolateBars){
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  const otherChocolateBars=chocolateBars.slice(1);
  return otherChocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
 chocolateBars.pop();
 return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
 const newF=chocolateBars.slice(0, chocolateBars.length - 1);
 return newF;
}
