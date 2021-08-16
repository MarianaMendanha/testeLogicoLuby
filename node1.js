function newArray(array) {
    let result = [];
    for (let i = 0; i < array[0]; i++) {
        result[i] = array[1];
    }
    
    return result;
  }

console.log(newArray([3, 'a']));