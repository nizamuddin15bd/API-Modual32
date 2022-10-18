class Support {
    name;
    designation = 'suppor web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session by Nizam');
    }
}

const aamir = new Support('Nizam uddin', 'Bangladesh');
const salman = new Support('amir khan', 'india');
aamir.startSession();
salman.startSession();
// console.log(aamir);
// console.log(salman);