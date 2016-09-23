/*var myArray = [1,2,"dog", 3,"cat"];
myArray.reverse();

myArray.push("bird"); // Go to last position
myArray.sort(); // order by alphabetic order, or crecente order
//myArray.pop(); // remove the last element of the array


var i = 0; // start index at position 0
while (i< myArray.length) { // check condition

  alert("The Value is :" + myArray[i]); // use the index to acess the current element
  i++; // increment index

}


var addArray = [500, 500, 50, 50];

var total = 0;

for(var i = 0; i < addArray.length; i++){

  //add the current element to the total
  total = total + addArray[i];


}

//after done it will print

alert("The total is" + total);

*/



// -------------> test intro -------------->

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
chocolateBars.push("mars");
chocolateBars.unshift("toblorone");
chocolateBars = ["aero", ...chocolateBars]; // assign to existing var chocolateBars


// -------------> Function 1 -------------->

function addElementToBeginningOfArray(pet, newPet) {

petNewArray = [newPet, ...pet];

return petNewArray;

}
addElementToBeginningOfArray(["cat","dog","bird","panda"],"milo");
console.log(addElementToBeginningOfArray);



// -------------> Function 2 -------------->

function destructivelyAddElementToBeginningOfArray(pet, newPet) {

 pet.unshift(newPet);
 return pet;

}
newPet = destructivelyAddElementToBeginningOfArray(["dog","cat"],"snake");
console.log(newPet);


// -------------> Function 3 -------------->

function addElementToEndOfArray(pet, newPet) {

petNewArray = [...pet, newPet];

 return petNewArray;

}
addElementToEndOfArray(["cat", "dog", "panda", "bird"], "horse");
console.log(addElementToEndOfArray);


// -------------> Function 4 -------------->

function destructivelyAddElementToEndOfArray(pet, newPet) {

pet.push(newPet);

return pet;
}

destructivelyAddElementToEndOfArray(["cat", "dog", "horse"], "bunny");
console.log(newPet);

// -------------> Function 5 -------------->

function accessElementInArray (myArray, index) {

return myArray[index];

}

x = accessElementInArray(["Ana", "Lia", "Kate", "Cindy"], [1]);
console.log(x + " is a smart girl");



// -------------> Function 6 -------------->

function destructivelyRemoveElementFromBeginningOfArray(myArray) {

myArray.sifth();
return myArray;
 }



  function removeElementFromBeginningOfArray(array) {
  var afterFirstRemoved = array.slice(1);
   return afterFirstRemoved;

}

function removeElementFromEndOfArray(myArray) {

  var remove = myArray.slice(0, myArray.length -1);
  return remove;
}
