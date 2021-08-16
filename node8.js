function array(...aniArray) {
    let array = [];
    array = aniArray.flat(Infinity);

    return array;
}

console.log(array([1, 2, [3], [4, 5]]));