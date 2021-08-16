function compareArrays(array1, array2) {
    const boolean = (((array1, array2) => array1.length === array2.length) && 
                    (array1.every((value, index) => value === array2[index])));
    return boolean;
}

console.log(compareArrays([1,2,3,4],[1,2,3,4]));