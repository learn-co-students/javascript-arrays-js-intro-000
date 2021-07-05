var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var addCholate = 'Magnum';

//Esta función inserta el elemento al principio de la matriz.
function addElementToBeginningOfArray (chocolateBars,addCholate)
{
  return [addCholate,...chocolateBars];
}

/*Esta función nuevamente inserta el elemento al principio de la matriz, pero utilizando el método  "unshift" */
function destructivelyAddElementToBeginningOfArray(chocolateBars,addCholate)
{
 chocolateBars.unshift(addCholate);
 return chocolateBars;
}

//Esta función inserta el elemento al final de la matriz.
function addElementToEndOfArray(chocolateBars,addCholate)
{
  return[...chocolateBars,addCholate];

}
/*Esta función nuevamente inserta el elemento al final de la matriz, pero utilizando el método  "push" */
function destructivelyAddElementToEndOfArray(chocolateBars,addCholate)
{
  chocolateBars.push(addCholate);
  return chocolateBars;
}

//Esta función tiene como objetivo acceder a un elemento de la matriz llamda "chocolateBars" por medio de un índice.
function accessElementInArray(chocolateBars,index)
{
  return chocolateBars[index];
}

//Esta función elimina el primer elemento de la matriz "chocolateBars".
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
{
  chocolateBars.shift();
  return chocolateBars;
}

//Esta función elimina el primer elemento de la matriz con el método de "slice".
function removeElementFromBeginningOfArray(chocolateBars)
{
 chocolate = chocolateBars.slice(1);
 return chocolate;
}

//Esta función elimina el último elemento de la matriz con el método "pop" mutando la matriz.
function destructivelyRemoveElementFromEndOfArray(chocolateBars)
{
  chocolateBars.pop();
  return chocolateBars;
}

// Esta función devuelve la matriz sin el último elemento sin mutar la matriz original.
function removeElementFromEndOfArray(chocolateBars)
{
  chocolates = chocolateBars.slice(0, chocolateBars.length -1);
  return chocolates;
}
