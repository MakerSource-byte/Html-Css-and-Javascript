// Array of 'names' and 'age'
const people = [
    {name:"James", age:23},
    {name:"Kenny", age:25},
    {name:"Ray", age:24}
]

// Function that takes (item) as parameter and acceses its name/age property
const getName = (item) => item.name;
const getAge = (item) => item.age;

const map = (array, method) =>{
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        // Uses (method) function
        newArray.push(method(array[i]));
    }
    return newArray;
}

console.log(map(people, getName));
