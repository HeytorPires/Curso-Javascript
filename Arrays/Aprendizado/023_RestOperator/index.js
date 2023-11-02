let num = 12;
let num1 = 18;
let num2 = 24;
let num3 = 30;

function imprimirNumbers(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumbers(num,num1,num2,num3)