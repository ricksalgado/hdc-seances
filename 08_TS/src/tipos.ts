// o TS é responsavel em tipar os elementos, ou seja. Dizer que o numero => number, o texto => string, objeto => {name: string, age: number}, etc
// tipos basicos
let isActive: boolean;
isActive = true;

let total: number = 150;

let myName: string = "Ricardo";


console.log(typeof isActive, typeof total, typeof myName);

let money;

console.log(typeof money);

money = 200;

console.log(typeof money)

// Array and onbjects

let numero: number[] = [1, 2, 3]

console.log(typeof numero);

let user: {name: string; age: number} = {name: 'Rick', age: 35}


// Tuplas
let rgb: [ number, number, number ] = [255, 34, 178];

console.log (typeof rgb, rgb);