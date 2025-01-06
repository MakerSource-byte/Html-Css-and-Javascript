import { SCRIPTS } from "./scripts.js";

let rtlScripts = SCRIPTS.filter(i => i.direction == "rtl"); // Filters all scripts with right to left as direction
const names = rtlScripts.map(item => { // Only way to access name is by map
    return item.name
})

console.log(names);

function average(array){
    return array.reduce((a,b) => a+b) / array.length; // Finds sum of all years by reducing then dividing
}

const averageLiving = Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)));
const averageDead = Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)));

console.log(`Average Origin of Living: ${averageLiving}`);
console.log(`Average Origin of Dead: ${averageDead}`)

