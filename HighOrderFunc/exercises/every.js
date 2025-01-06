function every(array, test){
    let correctCount = 0
    for (let element of array){
        if (test(element)) {
            continue;
        }else{
            return false;
        }
    }
    return true
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));