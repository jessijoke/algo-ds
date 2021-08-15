
const array1 = ['a', 'b', 'c', 'x'];

const array2 = ['z', 'y', 'i'];

const array3 = ['z', 'y', 'x'];

function containsCommonItem(arr1, arr2) {
  //loop through first arr to create object where properties === items in array1
  //loop through second array check if item in second array exists on created object
  
}

/*
function findCommonItem(arr1, arr2) {
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      return "They contain a common element."
    }
  }
  
  
  return "There are no common elements";
}

findCommonItem(array1, array3);
*/
/*
const nemo = ['nemo'];

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('FOUND NEMO!');
    }
  }
} 

findNemo(nemo); // O(n) --> Linear Time, n (operation) increases for every input (n)

function printOne(arr) {
  console.log("Testing " + arr[0]);
}

printOne(nemo); //O(1) --> constant time, always 1 operation
*/