function split(array, howMany) {
    let arraySl = [];
    for (let i = howMany+1; i > 0; i--) {
       arraySl.push(array.splice(0, Math.ceil(array.length / i)));
    }

    return arraySl;
}

console.log(split([1, 2, 3, 4, 5], 2));