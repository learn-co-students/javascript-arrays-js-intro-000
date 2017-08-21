 var chocolateBars=['snickers', 'hundred grand', 'kitkat', 'skittles'];

function  addElementToBeginningOfArray(tab,elem){
  var newtab=[elem,...tab];

  return newtab;
}

function destructivelyAddElementToBeginningOfArray(tab,elem){
   tab.unshift(elem);
   return tab;
}

function  addElementToEndOfArray(tab,elem)
{
  var newtab=[...tab,elem];

  return newtab;
}

function destructivelyAddElementToEndOfArray(tab,elem){
   tab.push(elem);
   return tab;
}


function accessElementInArray(tab,index){
  return tab[index];
}


function destructivelyRemoveElementFromBeginningOfArray(tab){
  tab.shift();
  return tab;
}

function removeElementFromBeginningOfArray(tab) {
  var newtab=tab.slice(1);
  return newtab;
}


function destructivelyRemoveElementFromEndOfArray(tab){
  tab.pop();
  return tab;
}

function removeElementFromEndOfArray(tab){
  var newtab= tab.slice(0, tab.length - 1);
  return newtab;
}
