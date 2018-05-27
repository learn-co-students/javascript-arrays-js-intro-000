function addElementToBeginningOfArray(arry,elmt){

return arry.unshift(elmt)

}



function destructivelyAddElementToBeginningOfArray(arry,elmt){
var newarry

newarry = [elmt, ...arry]

return newarry

}

function addElementToEndOfArray(arry,elmt){

return arry.push(elmt)

}


function destructivelyAddElementToEndOfArray(arry,elmt){
var newarry

newarry = [...arry, elmt]

return newarry

}
