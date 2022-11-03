let nestedArray = [0,5,5,5,1,1,8,8,8,2,3,5,6,7,4,4,9];
nestedArray.sort()
console.log(nestedArray)

let unicValuesArray = []

nestedArray.map((value, idx) => {
    unicValuesArray[value] = value;
})

console.log(unicValuesArray.slice(0))


const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  arr.sort();
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log({i, j});
  }

  console.log("NumberOfuniqueValues", i);
  console.log("uniqueValues", arr.splice(0, i));
};

countUniqueValues([1, 2, 1, 3, 4, 2, 3, 4, 5, 4, 3, 6, 5, 6, 3, 5, 4]);