function p1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P1 Success")
        },2000)
    })
}
function p2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("P2 Success")
            reject("p2 fail")
        },1000)
    })
}
function p3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("P3 Success")
        },3000)
    })
}
 async function main(){
    try{
    //const result=await  Promise.all([p1(),p2(),p3()]);
    //const result=await  Promise.any([p1(),p2(),p3()]);
    //const result=await  Promise.race([p1(),p2(),p3()]);
    const result=await  Promise.allSettled([p1(),p2(),p3()]);
console.log(result);
 }
 catch(e){
    console.log(e)
 }


 }
 main();
