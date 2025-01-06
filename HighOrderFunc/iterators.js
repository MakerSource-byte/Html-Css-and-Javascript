let array = [1,2,3,4,5];

// forEach: Loops through each indivisual element inside of array
array.forEach(n => {
    if (n % 2 === 0){
        console.log(`${n} is Even`);
    }    
})

// filter: Returns a NEW array with elements that pass a condition
const oddArr = array.filter(n => {
    if (n % 2 != 0){
        return n
    }
})

console.log(oddArr)

// map: Transforms an array by putting each element through a Function
const doubled = array.map(n => {
    return n * 2;
})

console.log(doubled);

// reduce: combines all elements within an array to a SINGLE value
const sum = array.reduce((current, next)=> {
    // Returned value becomes new current value
    return current += next;
}, 0)

console.log(sum);

let twoDim = [
    [3,5,7,5],
    [2,7,5,3],
    [4,6,7,4]
]

const sumOfTwoDim = twoDim.reduce((count, subArr) => {
    return count += subArr.reduce((a,b) => {
        return a+=b;
    })
}, 0)