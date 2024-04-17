const products= [
    {
        id: 1,
        name: "iPhone 11",
        price: 100000000000000000000
    },
    {
        id: 2,
        name: "iPhone 11 Pro",
        price: 100000000000000000000
    },
    {
        id: 3,
        name: "iPhone 11 Pro Max",
        price: 100000000000000000000
    },
    {
        id: 4,
        name: "iPhone 11 Pro Max",
        price: 100000000000000000000
    },
    {
        id: 5,
        name: "iPhone 11 Pro Max",
        price: 100000000000000000000
    }
];
console.log(`I want to buy ${products[0].name}`);

console.log(products.length);

// Use the for loop to iterate over the products

for(let i = 0; i < products.length; i++){
    console.log(products[i]);
}