//const products = ["product1", "product2", "product3"];
//const products =[] 
const products=[{
    _id:1,
    name:"Laptop",
    price: 1000,
    description: "A high-performance laptop for work and play.",
   
},
{
    _id:2,
    name:"Smartphone",
    price: 500,
    description: "A sleek smartphone with a powerful camera.",
},
{
    _id:3,
    name:"Headphones",
    price: 150,
    description: "Noise-cancelling headphones for immersive sound.",
}
]
let cart = [];

products.forEach((product) => {

    // product.quantity = 1; // example
    // product.total = product.quantity * product.price;
    //cart.push(product);
    const obj={
    ...product,
    quantity:2,
    //total: product.price * quantity
    };
    cart=[...cart,obj]

});
console.log(cart);