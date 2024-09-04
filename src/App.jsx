import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Product from "./Component/Product.jsx"
import Login from "./Component/Login.jsx"
import Register from "./Component/Register.jsx"

function App() {

  return (
    <Router>
         <Routes>
          <Route path="/" element={<Product/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>

         </Routes>
    </Router>
  )
}

export default App
