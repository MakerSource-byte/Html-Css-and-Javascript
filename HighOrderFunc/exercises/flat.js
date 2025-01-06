let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

let Original = arrays.reduce((a,b) => {
    return a.concat(b);
}, [])

console.log(Original)