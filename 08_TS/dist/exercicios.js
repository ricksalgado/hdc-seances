// Exercício 1: Trabalhando com Interfaces
function addCar(vehicle) {
    console.log(`My car is a ${vehicle.make} ${vehicle.model} year ${vehicle.year} `);
}
const myCar = {
    make: "Hyunday",
    model: "Elantra",
    year: 2019
};
addCar(myCar);
// Exercício 2: Genéricos em Funções
// Enunciado:
// Crie uma função genérica firstElement que retorne o primeiro item de um array. 
// A função deve ser capaz de trabalhar com qualquer tipo de dado.
function firstElement(arr) {
    return arr[1];
}
const newNumerico = [1, 2, 3,];
const fruits = ["Banana", 'Wattermelon', "Xirigutago"];
const booooooll = [false, true, true];
console.warn(firstElement(newNumerico), firstElement(fruits), firstElement(booooooll));
function freezeProduct(xiriguago) {
    return Object.freeze(xiriguago);
}
const bread = {
    id: 5,
    name: "Italian bread",
    price: 15.99
};
const frozenBread = freezeProduct(bread);
// frozenBread.name = 'nao vai dar'
function updateProductPrice(xiriguago, newPrice) {
    return Object.assign(Object.assign({}, xiriguago), newPrice);
}
const updateBread = updateProductPrice(bread, { price: 11.21 });
console.log(updateBread);
