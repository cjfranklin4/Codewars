/*
4-22-2021

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/
function digitize(n) {
  let numSplit = n.toString();
  let numArray = numSplit.split("").reverse();
  let revArray = [];
   for (let i = 0; i < numArray.length; i++) {
     let newNum = numArray[i]
    revArray.push(parseInt(newNum))
  }
  return revArray
}
