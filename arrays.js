var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];


function addElementToBeginningOfArray (fruits, moreFruits){
   return [moreFruits,...fruits];
}


function destructivelyAddElementToBeginningOfArray(shapes, moreShapes){
  shapes.unshift(moreShapes);
  return shapes;

}


function addElementToEndOfArray(dogs,moreDogs){
  return [...dogs, moreDogs];
}


function destructivelyAddElementToEndOfArray(dogs,moreDogs){
  dogs.push(moreDogs);
  return dogs;
}


function accessElementInArray(array,index){
  return array[index];
}


function destructivelyRemoveElementFromBeginningOfArray(cats){
  cats.shift();
  return cats;
}


function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length -1);
}
