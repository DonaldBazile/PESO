function usdToPeso(USD){
    const PESO = 0.08;
    const total = USD * PESO;
    return (`${USD} in USD is ${total.toFixed(2)} PESO`);
}
const answer = usdToPeso(32);
console.log(answer)
// console.log(usdToPeso(3239))
// console.log(usdToPeso(21.34))
// console.log(usdToPeso(342.34))