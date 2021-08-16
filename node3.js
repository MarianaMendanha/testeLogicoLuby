function trueArray(array) {
    let result = [];
    for (var index in array) {
        if (array[index]) {
            result.push(array[index]);
        }
    }
    
    return result;
  }

console.log(trueArray([1, 2, "", undefined]));