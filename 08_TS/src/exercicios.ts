// Exercício 1: Trabalhando com Interfaces

// Enunciado:
// Defina uma interface Vehicle que represente um veículo, com propriedades para make (marca), model (modelo) e year (ano). 
// Crie uma função que aceite um Vehicle como argumento e imprima uma descrição do veículo.

interface Vehicle {
    make: string;
    model: string;
    year: number;
}

function addCar(vehicle: Vehicle): void{
    
    console.log(`My car is a ${vehicle.make} ${vehicle.model} year ${vehicle.year} `)
    
}

const myCar: Vehicle = {
    make: "Hyunday",
    model: "Elantra",
    year: 2019
} 

addCar(myCar);

// Exercício 2: Genéricos em Funções

// Enunciado:
// Crie uma função genérica firstElement que retorne o primeiro item de um array. 
// A função deve ser capaz de trabalhar com qualquer tipo de dado.
function  firstElement<T>(arr: T[]): T{
    return arr[1]
}

const newNumerico = [1, 2, 3,];
const fruits = ["Banana", 'Wattermelon', "Xirigutago"];
const booooooll = [false, true, true]

console.warn(firstElement(newNumerico), firstElement(fruits), firstElement(booooooll))


// Exercício 3: Uso de Readonly e Partial

// Enunciado:
// Dado o tipo Product abaixo, crie uma função freezeProduct que torne um produto imutável. 
// Em seguida, crie outra função updateProductPrice que atualize apenas o preço de um produto, demonstrando o uso de Partial.

type Product = {
    id: number;
    name: string;
    price: number;
};

function freezeProduct(xiriguago: Product): Readonly<Product>{
    return Object.freeze(xiriguago);
}

const bread: Product = {
    id: 5,
    name: "Italian bread",
    price: 15.99
}

const frozenBread = freezeProduct(bread);

// frozenBread.name = 'nao vai dar'

function updateProductPrice(xiriguago: Product, newPrice: Partial<Product>): Product {
    return {...xiriguago, ...newPrice}
}

const updateBread = updateProductPrice(bread, {price: 11.21});

console.log(updateBread);