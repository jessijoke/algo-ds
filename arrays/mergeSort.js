//simple merge sort
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift())
    }
    console.log([...arr, ...left, ...right])
}

//Course Merge Sort
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr2.length === 0) return arr1;
  if (arr1.length === 0) return arr2;

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item)
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  console.log(mergedArray)
  return mergedArray;
}

merge([0, 3, 4, 31], [4, 6, 30]);