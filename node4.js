function arrayToObject(array) {
    const obj = Object.fromEntries(array);
    
    return obj;
  }

console.log(arrayToObject([["c", 2],["d", 4]]));