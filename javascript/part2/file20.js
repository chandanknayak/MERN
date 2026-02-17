const products=[{
    _id:1,
    name:"product 1",
    desc:"This is description of product 1",
    price:1000,
    category:"Laptop"
},
{
    _id:2,
    name:"product 2",
    desc:"This is description of product 2",
    price:500,
    category:"Smartphone"
},
{
    _id:3,
    name:"product 3",
    desc:"This is description of product 3",
    price:150,
    category:"Headphones"
},
{
    _id:4,
    name:"product 4",
    desc:"This is description of product 4",
    price:2000,
    category:"Laptop"
},
{
    _id:5,
    name:"product 5",
    desc:"This is description of product 5",
    price:800,
    category:"Smartphone"
},
{
    _id:6,
    name:"product 6",   
    desc:"This is description of product 6",
    price:300,
    category:"Headphones"
}
];
let search = "laptop";
// const result = products.map((product) => {

//     return product
// });
// console.log(result);

// const result = products.filter((product) => {

//     return product.category.toLowerCase() === search.toLowerCase()
// }

const result = products.filter((product) =>  product.category.toLowerCase() === search.toLowerCase())
console.log(result);