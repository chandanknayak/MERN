// //closure
// function outer(){
//     let n=1;
//     function inner(){
//         return n++;
//     }
//     return inner;
// } 

// const counter = outer()
// console.log(counter())
// console.log(counter())
//console.log(counter())

function user(){
    let password=1234;
    function checkPassword(){
        return password===checkPassword;
    }
    return checkPassword;
}

const checkPassword=user()
console.log(checkPassword("123"))