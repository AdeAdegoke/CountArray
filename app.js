/* Create a function that takes a parameter, 
the parameter should expect an array of numbers when the function is invoked. 
This function should return an object of key-value pairs, 
the key should be the number in the array and the value should be 
the number of times that number(key) appears in the array. 
Example: [1,2,2,3,3,4,4,5,5,5] 
Return value on console: {"1":1, "2":2, "3":2, "4":2, "5":3} */

function countOccurrences(arr) {
    const counts = {};

    for (const num of arr) {

      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    }
    return counts;
  }
  
    const inputArray = [6, 3, 3, 3, 3, 5, 5, 5, 2, 2];
        const result = countOccurrences(inputArray);
    console.log(result);
