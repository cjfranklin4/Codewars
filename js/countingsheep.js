/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
function countSheeps(arrayOfSheep) {
  // Will push 1 to an array if the value of the item is 1
  let numSheepArray = [];
  let numSheep = 0;


  arrayOfSheep.forEach(sheep => {
  if (sheep == null || sheep == undefined || sheep === false){
    numSheepArray.push(0);
  } else if (sheep === true) {
    numSheepArray.push(1);
  }
})
 //Will reduce the array numSheepArray to numSheep and return its value
  numSheep = numSheepArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(numSheep)
  return numSheep
}
