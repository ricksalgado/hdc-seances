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

let user: { name: string; age: number } = { name: 'Rick', age: 35 }


// Tuplas
let rgb: [number, number, number] = [255, 34, 178];

console.log(typeof rgb, rgb);

// Funcoes

function greet(nome: string): string {
    return `Hi, ${nome}`;
}

console.log(greet('Ricardo'));

// ENUM
enum Directions {
    Up,
    Down,
    Left,
    Right
}

function getDirectionMessage(direction: Directions): string {
    switch (direction) {
        case Directions.Up:
            return "Moving up";
        case Directions.Down:
            return "Moving down";
        case Directions.Left:
            return "Moving left";
        case Directions.Right:
            return "Moving right";
        default:
            return "Ficou parado"; ''
    }
}

console.warn(getDirectionMessage(Directions.Down));
console.warn(getDirectionMessage(Directions.Down));
console.warn(getDirectionMessage(Directions.Up));
console.warn(getDirectionMessage(Directions.Left));