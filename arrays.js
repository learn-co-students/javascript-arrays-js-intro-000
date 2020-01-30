
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(datos, item) {
  return [item, ...datos];
}

function destructivelyAddElementToBeginningOfArray(datos, item) {
  datos.unshift(item);

  return datos;
}

function addElementToEndOfArray(datos, item) {
  return [...datos, item];
}

function destructivelyAddElementToEndOfArray(datos, item) {
  datos.push(item);

  return datos;
}

function accessElementInArray(datos, index) {
  return datos[index];
}

function destructivelyRemoveElementFromBeginningOfArray(datos) {
  datos.shift();

  return datos;
}

function removeElementFromBeginningOfArray(datos) {
  return datos.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(datos) {
  datos.pop();

  return datos;
}

function removeElementFromEndOfArray(datos) {
  return datos.slice(0, datos.length - 1)
}
