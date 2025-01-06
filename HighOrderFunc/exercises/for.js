function loop(n, test, update, func){
    while (test(n)){
        func(n);
        n = update(n);
    }
}

loop(3, n => n > 0, n => n-= 1, console.log)