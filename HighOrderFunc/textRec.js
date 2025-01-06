import { SCRIPTS } from "./scripts.js";

function characterCount(script){ // counts the total number of characters in a script
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to-from);
    }, 0);
}

/* console.log(SCRIPTS.reduce((a,b)=>{
    return characterCount(a) < characterCount(b) ? b : a // Returns 'b' if 'a' has less characters than 'b'
    // condition ? a : b     (if condition is true, it returns the first value, in our example, 'a' )
    // whatever value returned becomes our new Current value, 'a' and compares the next item.
})) */

function characterScript(code){ // Finds what script a char/code belongs to
    for(let script of SCRIPTS){
        if (script.ranges.some(([from, to]) => {
            return code < to && code >= from;  /* Checks if 'code' is inbetween range */
        })) { // If true, function returns current script
            return script;
        }
        // Function returns null if false
    }
    return null
}

// console.log(characterScript(121));

function countBy(items, func){ // Sorts items into counts based off of condition, 'func'
    let counts = [];
    for(let item of items){
        let name = func(item);
        let known = counts.find(c => c.name == name);
        if (!known){
            counts.push({name, count:1});
        }else{
            known.count++;
        }
    }
    return counts;
}

function textScripts(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : 'none';
    }).filter(({name}) => name != 'none')

    let total = scripts.reduce((n, {count}) => n + count, 0); // Surrounds 'count' with curly brackets to directly take the value of 'count' from scripts
    if (total === 0) return 'No scripts Found';

    return scripts.map(({name, count})=>{
        return `${Math.round(count * 100/total)}% ${name}`;
    }).join(", ")
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв'))

function dominateDirection(text){
    let count = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : 'none'; // If script returned any value/name
    })

    //console.log(count)
    const majority = count.reduce((a,b) => {
        return a.count < b.count ? b : a;
    })

    return SCRIPTS.find(n => n.name == majority.name).direction
}

console.log(dominateDirection("Hey, مساء الخير"))