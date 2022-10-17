//declare variable bases on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log(x, b);

// destructuring array
const [p, q] = [45, 37, 91, 86];
console.log(p, q);
const [best, faltu] = ['monotaj', 'poroshi'];
// console.log(best, faltu);
const { } = { sky: 'blue', soil: 'matti', color: 'res', money: 500 };


// chaining
const company = {
    name: 'GP',
    CEO: { id: 1, name: 'ajmol', food: 'foska' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech:
        {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}

// console.log(company.web.tech.third);
console.log(company.backend?.tech?.third);