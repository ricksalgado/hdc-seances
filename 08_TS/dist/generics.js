// Generics
// TS -> Tipar
// f -> tipo x
// f -> tipo y === ERRO
// f -> tipo G ->x,y
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3]);
let stringArray = getArray(['Mahteus', 'Lucas', 'Joao']);
console.log(numberArray, stringArray);
