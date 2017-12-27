var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


addElementToBeginningOfArray = (a,b) => {
  c= [b,...a];
  return c;


}

destructivelyAddElementToBeginningOfArray = (a,b) => {
  a.unshift(b);
  return a;
}

addElementToEndOfArray = (a, b) => {
  c = [...a, b];
  return c;
}

destructivelyAddElementToEndOfArray = (a,b) => {
  a.push(b);
  return a;
}

accessElementInArray = (a, b) => {
  return a[b];
}

destructivelyRemoveElementFromBeginningOfArray = (a) => {
  c=a.shift();
  return a;
}

removeElementFromBeginningOfArray = (a) => {
  c = a.slice(1);
  return c;
}

destructivelyRemoveElementFromEndOfArray = (a) => {
  c=a.pop();
  return a;
}

removeElementFromEndOfArray = (a) => {
  return a.slice(0, a.length-1);
}
