const getAgeAvr = (array) => {
    let avr = 0;
    for (let i = 0; i < array.length; i++) {
        avr += array[i].age;
    }
    return avr / array.length;
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const checkPeople = (array) => {
    for(let person of array) {
        if(person.name === "John Doe") {
            console.log(`Here is your beer, ${person.name} !`);
        }
        else {
            console.log(`Get out fucking here, ${person.name} !`);
        }
    }
}

(() => {
    let array = [];
    array.push(new Person("John Doe", 20));
    array.push(new Person("Jane Doe", 19));
    array.push(new Person("Fred Doe", 32));
    array.push(new Person("Chris Doe", 45));
    array.push(new Person("Layla Doe", 37));
    console.log(getAgeAvr(array));
    checkPeople(array);
})();