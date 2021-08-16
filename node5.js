function arrayMinus(array, ...params) {
    array = array.filter(elemArray => !params.includes(elemArray));
    return array;
  }

console.log(arrayMinus([5, 4, 3, 2, 5], 5, 3));