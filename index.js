  function hasTargetSum(array, target) {
    // Write your algorithm here
    for (let num1 = 0; num1 < array.length; num1++) {
      for (let num2 = num1 + 1; num2< array.length; num2++) {
        if (array[num1] + array[num2] === target) {
          return true
        }
      }
    }
    return false
  }
  


/* 
  Write the Big O time complexity of your function here
  O(n²)
*/

/* 
  Add your pseudocode here
    Loop through the array tind the first and second number. If the sum of the first and second number equals to the target number then return true
*/

/*
  Add written explanation of your solution here
  Loop through the array tind the first and second number. If the sum of the first and second number equals to the target number then return true
*/
//A function called hasTargetSum that has two parameters

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 20, 4, 5, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
