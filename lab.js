function repeat(n, action){
  for(let i = 0; i < n; i++){
    action(i)
  }
}

let labels = [];
repeat(5, i => {
  labels.push(`Units ${i+1}`);
})

console.log(labels)

function noisy(func){
  return (...args) => { // Accepts any amount of arguments
    console.log("Called with: ", args);
    let result = func(...args)
    console.log(`Returned with: ${result}`);
    return result
  }
}

noisy(Math.max)(3,2,1)

function unless(test, then){
  if (!test){ // Checks condition
    then() // Calls higher-order function, 'then'
  }
}

repeat(4, i => {
  unless(i % 2 == 0, () => {
    console.log(`${i} is Odd`)
  })
})

let scripts = [
  { name: "Latin", count: 5 },
  { name: "Cyrillic", count: 6 }
];

let total = scripts.reduce((n, {count}) => {
  return n + count
}, 0)
console.log(total)