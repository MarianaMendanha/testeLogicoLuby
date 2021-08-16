function removeDuplicates(array) {
    return array.filter((value, index) => array.indexOf(value) === index);
}

console.log(removeDuplicates([1,2,3,3,2,4,5,4,7,3]));