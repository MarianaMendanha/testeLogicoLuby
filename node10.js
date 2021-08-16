function commonElements(array1, array2) {
    let eqValues = array1.filter(elemArray1 => array2.includes(elemArray1));

    return eqValues;
}

console.log(commonElements([6, 8], [8, 9]));