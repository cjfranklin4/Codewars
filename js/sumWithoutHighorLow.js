/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation. */

function sumArray(array) {
    if(Array.isArray(array) === false || array.length === 0 || array.length === 1){
      return 0;
    } else{
          let sortedArray = array.sort((a,b) => a-b);
          const initial = 0;
          let sumArray = sortedArray.slice(1, -1).reduce((prev, current) => prev + current, initial)
          return sumArray;
    }
  }