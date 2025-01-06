const store = {
    sunglasses: {
        inventory: 817, 
        cost: 9.99
    },
    pants: {
        inventory: 236, 
        cost: 7.99
    },
    bags: {
        inventory: 17, 
        cost: 12.99
    }
}

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemsArr = order.items;
            const inStock = itemsArr.every(item => store[item[0]].inventory > item[1]);

            if (inStock){
                let total = 0;
                itemsArr.forEach(item => {
                    total += item[1] * store[item[0]].cost;
                });
                console.log(`All items in stock. Total purchase Cost: ${total}`);
                resolve([order, total]);
            }else{
                reject("Order not Completed. Some items Out of Stock")
            }
        }, Math.floor(Math.random * 2000))
    })
}

const processPayment = (orderArr) =>{
    const order = orderArr[0];
    const cost = orderArr[1];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(order.giftcardBalance >= cost){
                console.log("Purchase Made! Generating Shipping Label");
                resolve([order, Math.floor(Math.random * 5000)]);
            }else{
                reject("Card has Insuffiencent Balence!")
            }
        }, Math.floor(Math.random*2000));
    })
}

const shipOrder = (orderLabel) => {
    const order = orderLabel[0];
    const label = orderLabel[1];
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Thank you for your Purchase! Shipping label is ${label}`)
        }, Math.floor(Math.random*2000));
    })
}

const order = {
    items: [['sunglasses', 5], ['bags', 2]],
    giftcardBalance: 79.82
};

checkInventory(order).then((resolvedValue) => {
    return processPayment(resolvedValue);
}).then((resolvedLabel)=>{
    return shipOrder(resolvedLabel);
}).then((sucessMessage) => {
    console.log(sucessMessage);
});