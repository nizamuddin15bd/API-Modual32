// 1.let and const
const hubby = 'omor Sani';
let phone = 'iphone 15';
phone = 'Sumsung Galaxy S17'

// 2.defult parameter
function maxNumber(array = []) {
    // 5.spread or three dots
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3.template string
const myNote = `I am mojnu of ${hubby}. I have a ${phone}`;
console.log(myNote);


// 4.arrow function
// function square(x,) {
//     return x * x
// }

const square = x => x * x;
console.log(square(8));