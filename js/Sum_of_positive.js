/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0
*/

const posNum = (num) => {
  return num > 0;
}

function positiveSum(arr) {
  let posNumArray = [];
  let sumArray = 0;

  if (!arr.length){
    return 0;
  } else {
    posNumArray = arr.filter(posNum)
    sumArray = posNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sumArray
  }
}
