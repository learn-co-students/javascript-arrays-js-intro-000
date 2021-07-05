chocolateBars = [
  `snickers`,
  `hundred grand`,
  `kitkat`,
  `skittles`
]

var candyBar = "rocky road"


function addElementToBeginningOfArray(cBars , candyBar) {
  var newChocolateBars = [candyBar, ...cBars] ;
  return newChocolateBars;
}


function destructivelyAddElementToBeginningOfArray(cBars , candyBar) {
  cBars.unshift(candyBar) ;
  return cBars ;
}

function addElementToEndOfArray( cBars , candyBar ) {
  var newChocolateBars = [ ...cBars, candyBar ] ;
  return newChocolateBars;

}


function destructivelyAddElementToEndOfArray( cBars , candyBar ){
  cBars.push(candyBar) ;
  return cBars ;
}


function accessElementInArray(cBars , ndx ){
  return(cBars[ndx]) ;
}

function destructivelyRemoveElementFromBeginningOfArray(cBars ) {
  cBars.shift();
  return cBars;
}

function removeElementFromBeginningOfArray(cBars ){
  return cBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(cBars){

  cBars.pop();
  return   cBars;

}

function removeElementFromEndOfArray(cBars){
  return  cBars.slice(0, cBars.length - 1);


}
