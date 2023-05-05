import { Routes,Route, BrowserRouter}  from "react-router-dom"
import './App.css';
import Home from "./pages/home";
import Register from "./pages/SingUp";
import SingIn from "./pages/login";
import CartPage from "./pages/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element = {<Register/>} />
        <Route exact path="/login" element = {<SingIn/>} />
        <Route exact path="/cart" element = {<CartPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
