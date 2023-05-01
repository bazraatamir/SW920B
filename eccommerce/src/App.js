import { Routes,Route, BrowserRouter}  from "react-router-dom"
import './App.css';
import Home from "./pages/home";
import Register from "./pages/SingUp";
import SingIn from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element = {<Register/>} />
        <Route exact path="/login" element = {<SingIn/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
