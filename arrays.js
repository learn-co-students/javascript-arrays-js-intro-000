var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (chocolateBars, barString) {
  return [barString, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, barString) {
  chocolateBars.unshift(barString);
  return chocolateBars
}

function addElementToEndOfArray (chocolateBars, barString) {
  return [...chocolateBars,barString]
}


function destructivelyAddElementToEndOfArray (chocolateBars, barString) {
  chocolateBars.push (barString)
  return chocolateBars
}

var CollegeFootballTeams = ["Oregon Ducks","Alabama Crimson Tide","Washington Huskies","USC Trojans"];
function accessElementInArray (array, index) {
  return array [index];
}

function destructivelyRemoveElementFromBeginningOfArray (CollegeFootballTeams) {
  CollegeFootballTeams.shift();
  return CollegeFootballTeams;
}

function removeElementFromBeginningOfArray (CollegeFootballTeams) {
  return CollegeFootballTeams.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(CollegeFootballTeams) {
  CollegeFootballTeams.pop();
  return CollegeFootballTeams;
}

function removeElementFromEndOfArray (CollegeFootballTeams) {
  return CollegeFootballTeams.slice (0,CollegeFootballTeams.length - 1);
}
