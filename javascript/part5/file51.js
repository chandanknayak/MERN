//const url="https://jsonplaceholder.typicode.com/users"
const url="http://localhost:8080/"
async function fetchData(){
    const response=await fetch(url)
    const result= await response.json();
    console.log(result)
}
fetchData()