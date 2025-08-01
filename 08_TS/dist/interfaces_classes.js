// utilizando interface
const myUser = {
    id: 1,
    name: "Ricardo",
    isActive: false,
};
console.log(myUser);
// Classes
// para imnplementar uma interface  
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }
    greet(isNew) {
        console.error(`Ola, meu nome eh ${this.name} e eu tenho ${this.id} anos `);
        if (isNew) {
            console.log('E sou novo por aqui');
        }
    }
}
;
const personData = new Person(12, "Ximira Gelo", false);
console.log(personData);
personData.greet(true);
