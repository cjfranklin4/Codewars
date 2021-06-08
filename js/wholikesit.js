/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

For 4 or more names, the number in and 2 others simply increases.
*/

function likes(names) {
    //turn the input into an array called nameArray
    let nameArray = names;
    
    if (nameArray.length === 0){
      return 'no one likes this'
      
    } else if (nameArray.length === 1){
      console.log(nameArray)
      return `${nameArray[0]} likes this`
      
    } else if (nameArray.length === 2){
       console.log(nameArray)
        return `${nameArray[0]} and ${nameArray[1]} like this`
      
    } else if (nameArray.length === 3){
      console.log(nameArray)
      return `${nameArray[0]}, ${nameArray[1]} and ${nameArray[2]} like this`
      
    } else if (nameArray.length > 3){
      console.log(nameArray)
      return `${nameArray[0]}, ${nameArray[1]} and ${nameArray.length-2} others like this`
      
    }
  }