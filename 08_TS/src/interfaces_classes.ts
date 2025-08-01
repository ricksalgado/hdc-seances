// Definindo interface
// tabelas => entidades: User -> name:, email:, password
// back => front
// Interfaces => mapear todos os campos 
interface User {
    id: number;
    name: string;
    isActive: boolean;
}

// utilizando interface
const myUser: User = {
    id: 1,
    name: "Ricardo",
    isActive: false,
};

console.log(myUser);

// Classes
// para imnplementar uma interface  
class Person implements User {
    id: number;
    name: string;
    isActive: boolean;

    constructor(id: number, name: string, isActive: boolean){
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }

    greet(isNew: boolean){
        console.error(`Ola, meu nome eh ${this.name} e eu tenho ${this.id} anos `);

        if (isNew){
            console.log('E sou novo por aqui')
        }
        
    }
    
};

const personData = new Person(12,"Ximira Gelo",false)

console.log(personData);

personData.greet(true)