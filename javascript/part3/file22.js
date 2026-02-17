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
const cart =[]
function addToCart(productId){
    const product = products.find((product) => product._id === productId);
    //console.log(product)
    // if(product){
    //     cart.push(product);
    // }else{
    //     console.log("Product not found");
    // }
    cart.push({...product,quantity:1});
}
    function increment(productId){
        const cartItem = cart.find((item) => item._id === productId);
        if(cartItem){
            cartItem.quantity += 1;
        }
}
function decrement(productId){
    const cartItem = cart.find((item) => item._id === productId);
    if(cartItem){
        if(cartItem.quantity > 1){
            cartItem.quantity -= 1;
        }
    }
}

   function placeOrder(){

    if(cart.length === 0){
        console.log("Cart is empty");
        return;
    }

    const totalAmount = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    const order = {
        orderId: Date.now(),
        items: [...cart],
        totalAmount: totalAmount,
        status: "Placed",
        orderDate: new Date()
    };
    // cart.forEach((i) => {
    //     console.log(i.id, i.name, i.desc, i.price)
    // })

    console.log("Order placed:", order);

    // clear cart
    cart.length = 0;
}


addToCart(1);
addToCart(3);
addToCart(5);
//addToCart(8);
//increment(1);
//console.log(cart);
increment(1);
// console.log(cart);
placeOrder();

