const fish = { id: '58', name: 'king Hilshs', price: "9000", phone: '015452544154', address: 'chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, dress);
// console.log(phone);
// console.log(phone);


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

// const work = company.web.work;
// const freamework = company.web.framework;
// console.log(freamework);
const { work, framework } = company.web;
const { food } = company.CEO;
const { second, third } = company.web.tech;
console.log(work, framework, food, second);