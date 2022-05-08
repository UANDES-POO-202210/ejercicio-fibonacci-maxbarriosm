const prompt = require("prompt-sync")();

function fib(n){
    if(n<2){
        return n; //Si es la poscición 0, retornará 0 y si es la poscición 1 retornará 1
    }
    return fib(n-1) + fib(n-2);
    
}


const number = prompt("Ingresa un numero: ");

console .log("F("+number+") = " +fib(parseInt(number)));





