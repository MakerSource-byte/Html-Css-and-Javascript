const inventory = {
    jeans:1304,
    sweaters:980,
    shirts:535
}

const executorFunction = (resolve, reject) =>{
    if (inventory.jeans > 0){
        resolve("Proccesed Order for Jeans Sucessful!");
    }else{
        reject("Out of Stock!")
    }
}

function orderJeans(){
    return new Promise(executorFunction)
}

const order = orderJeans();
console.log(order);