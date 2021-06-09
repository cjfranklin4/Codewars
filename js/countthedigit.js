/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
*/

//Below is a WIP

function nbDig(n, d) {
    // your code
  let numArray = [];
  console.log(n,d)
  
  for(let i = 0; i <= n; i++){
    let k = i**2;
    numArray.push(k.toString())
  }
  
  let digitArray = numArray.filter(num => {
    return num.includes(d)
  })
  
  let test = digitArray.map(num => {
    num.length
  })

  console.log(digitArray)
  console.log(test)
  
  
}