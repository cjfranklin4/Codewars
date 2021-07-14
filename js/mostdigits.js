/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
    // code here
    
    //convert the given array of numbers to strings and find their length
    let strArray = array.map(num => num.toString().length)
    
    //find the index of the largest number length in the array
    let maxInd = strArray.indexOf(Math.max(...strArray))
    
    
    let maxNum = array[maxInd]
    
    
    return maxNum
  }