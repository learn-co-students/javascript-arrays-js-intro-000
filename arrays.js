var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(dessert, moreFood){
  return [moreFood, ...dessert];
}

function destructivelyAddElementToBeginningOfArray(fish, fishType){
  fish.unshift(fishType);
  return fish;
}

function addElementToEndOfArray(dogs, dogType){
  return [...dogs, dogType];
}

function destructivelyAddElementToEndOfArray(hat, hatType){
  hat.push(hatType);
  return hat;
}

function accessElementInArray(cakes, selection){
  return (cakes[selection]);
}

function destructivelyRemoveElementFromBeginningOfArray(liszt){
  liszt.shift();
  return liszt;
}

function removeElementFromBeginningOfArray(era){
   return era.slice(1);
 }

function destructivelyRemoveElementFromEndOfArray(corn){
  corn.pop();
  return corn;
}

function removeElementFromEndOfArray(fruits){
  return fruits.slice(0, fruits.length -1);
}
