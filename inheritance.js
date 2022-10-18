class TeamMember {
    name;
    designation = 'suppor web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session by Nizam');
    }
}


class StudentCare extends TeamMember {
    builARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
};


class NeptuneDev extends TeamMember {
    releaseApp(version) {
        console.log(this.name, 'release App version', version);
    }
}


const aamir = new Support('Nizam uddin', 'Bangladesh', 11);
const salman = new Support('amir khan', 'india', 10);

const alia = new StudentCare('Alia', 'London', 12);
const neptune = new NeptuneDev('Zahid' 'chapraherhat', 10);
console.log(neptune);
// console.log(alia);
// console.log(aamir);
// console.log(salman);