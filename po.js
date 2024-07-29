function fibonacciLoop(num){
    if(num<=1){
        return num
    }
    let a = 0, b = 1, next;
    for(let i = 2; i <= num; i++){
        next = a + b;
        a = b;
        b = next;
    }
    return b;
}
console.log(fibonacciLoop(10));