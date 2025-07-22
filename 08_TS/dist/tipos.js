// o TS é responsavel em tipar os elementos, ou seja. Dizer que o numero => number, o texto => string, objeto => {name: string, age: number}, etc
// tipos basicos
let isActive;
isActive = true;
let total = 150;
let myName = "Ricardo";
console.log(typeof isActive, typeof total, typeof myName);
let money;
console.log(typeof money);
money = 200;
console.log(typeof money);
// Array and onbjects
let numero = [1, 2, 3];
console.log(typeof numero);
let user = { name: 'Rick', age: 35 };
// Tuplas
let rgb = [255, 34, 178];
console.log(typeof rgb, rgb);
// Funcoes
function greet(nome) {
    return `Hi, ${nome}`;
}
console.log(greet('Ricardo'));
// ENUM
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
function getDirectionMessage(direction) {
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
            return "Ficou parado";
            '';
    }
}
console.warn(getDirectionMessage(Directions.Down));
console.warn(getDirectionMessage(Directions.Down));
console.warn(getDirectionMessage(Directions.Up));
console.warn(getDirectionMessage(Directions.Left));
