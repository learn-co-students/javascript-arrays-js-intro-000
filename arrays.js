var chocolateBars = new Array();
chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(arrayUno, foo) {
  var arrayUno = [1];
  arrayUno = ['foo', ...arrayUno];
  return arrayUno
}

function destructivelyAddElementToBeginningOfArray(arrayDos, foo) {
  arrayDos.unshift("foo");
  return arrayDos
}

var addElementToEndOfArray = function(arrayTres, foo) {
  var arrayTres = [1];
  arrayTres = [...arrayTres, "foo"];
  return arrayTres
}

function destructivelyAddElementToEndOfArray(arrayCuatro, foo) {
  arrayCuatro.push("foo");
  return arrayCuatro
}

var accessElementInArray = function(arrayCinco, index) {
  var arrayCinco = [1, 2, 3];
  return arrayCinco[2];
}

var removeElementFromBeginningOfArray = function(arraySes) {
  var arraySes = new Array();
  arraySes = [1, 2, 3];
  arraySes.shift();
  return arraySes
}

var removeElementFromEndOfArray = function(arraySiete) {
  var arraySiete = new Array();
  arraySiete = [1, 2, 3];
  arraySiete.pop();
  return arraySiete
}
