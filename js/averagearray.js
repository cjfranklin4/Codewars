/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function find_average(array) {
  // your code here
  if (array.length === 0){
    return 0;
  } else {
    let avgArray = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    avgArray = avgArray/array.length
    return avgArray
  }
}
