

//i
  //sorted array and target
//o
  //return true if target is found
  //return false if target is not found
//e
  //none
//c
  //none
//h
  //I am going to start at the middle value of the array in each pass I am going to check if the target is equal to the middle value, if not check if the current middle value is less than the current then reassign the middle value to be the value in the middle in the lower values and do the same if the target is greater than the middle value. Once found return true, if not return false
function binarySearch(arr, target) {
  if (arr.length === 0) {
    return failse
  }

  if (arr.length === 1) {
    return arr[0] === target
  }
  
  const middleIndex = Math.floor(arr.length / 2)
  const middleValue = arr[middleIndex]

  if (target == middleValue) {
    return true;
  }

  if (middleValue > target) {
    return binarySearch(arr.slice(0, middleIndex), target)
  } else {
    return binarySearch(arr.slice(middleIndex), target)
  }
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  if (arr.length === 0) {
    return -1
  }
  
  const middleIndex = Math.floor(arr.length / 2)
  const middleValue = arr[middleIndex]

  console.log(middleIndex, middleValue)
  if (target == middleValue) {
    return middleIndex;
  }
  if (middleValue > target) {
    return binarySearchIndex(arr.slice(0, middleIndex), target)
  } else {
    
    const index = binarySearchIndex(arr.slice(middleIndex + 1), target)
    if (index < 0) {
      return -1
    }
    console.log(`${middleIndex} + ${index} + 1`)
    return middleIndex + index + 1;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearch([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3], 1));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([4, 7, 20], 100));

  console.log("");
  console.log("Expecting: 1");
  console.log("=>", binarySearchIndex([1, 2, 3], 2));

  console.log("");
  console.log("Expecting: 2");
  console.log("=>", binarySearchIndex([1, 2, 3], 3));

  console.log("");
  const numbers = []
  for (let i = 1; i <= 20; i++) {
    numbers.push(i)
  }
  console.log(numbers)
  console.log("=>", binarySearchIndex(numbers, 13));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
