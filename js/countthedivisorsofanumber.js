/*

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000

*/

function getDivisorsCnt(n){
    let num = n;
    
    let test = 1;
    
    let divisorArray = [];
  
                
    //Run a while loop for when test is less than or equal to num (because the largest divisor of a number is itself)
    while (test <= num){
        if (num % test === 0){
          //push the test value that leaves the above true into the divisorArray
          divisorArray.push(test)
        }
      test++;
      }
      
    
    return divisorArray.length
  }