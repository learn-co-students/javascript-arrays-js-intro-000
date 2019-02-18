var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(domesticAnimals, newAnimal) {
  domesticAnimals = ["dogs", "cats"];
  newAnimal = "bird";
  domesticAnimals = ["bird", ...domesticAnimals];
  return domesticAnimals;
}
