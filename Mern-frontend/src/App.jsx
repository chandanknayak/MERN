import axios from "axios"
import {usestate,useEffect} from "react"

function App() {
  const [products,setProducts] = useState([])
  useEffect(()=>
  {
    axios.get("http://localhost:8080"/api/products");
  })
  return (
  <div>
    <h1>Hello world</h1>
    <p>
      my name is chandan
    </p>
  </div>
    

  )
}
export default App
