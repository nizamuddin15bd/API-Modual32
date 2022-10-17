const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'Smart watch', price: 3000, color: 'black' },
    { name: 'stick note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' },
];


const productsName = products.map(product => product.phone);
const productsprice = products.map(product => product.price);
const productscolor = products.map(product => product.color);
// products.map(product => console.log(product));
products.forEach(product => console.log(product)) //return korano proyojon na hola forEach babohar kora jai
console.log(productscolor);
