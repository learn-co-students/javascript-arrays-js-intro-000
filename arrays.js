var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(bars, element) {
  var newarray = [element, ...bars];
  return newarray
}

function destructivelyAddElementToBeginningOfArray(bars, element) {
  bars.unshift(element);
  return bars
}


function addElementToEndOfArray(bars, element) {
  var newbars = [...bars, element];
  return newbars
}

function destructivelyAddElementToEndOfArray(bars, element) {
  bars.push(element);
  return bars
}

function accessElementInArray(bars, occurrence) {
  var reqentry = bars[occurrence];
  return reqentry
}

function destructivelyRemoveElementFromBeginningOfArray(bars) {
  bars.shift();
  return bars
}

function removeElementFromBeginningOfArray(bars) {
  var newbars = bars.slice(1)
  return newbars
}

function destructivelyRemoveElementFromEndOfArray(bars) {
bars.pop();
return bars
}

function removeElementFromEndOfArray(bars) {
  var newbars = bars.slice(0, bars.length -1)
  return newbars
}
