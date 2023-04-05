import Header from './component/header';
import './App.css';
import Register from './component/register';
import Login from './component/login';
import{ BrowserRouter , Routes,Route} from 'react-router-dom'
import jwt_decode from"jwt-decode"
import { useState } from 'react';
function App() {
  const [token,setToken]= useState('');
  const handlelogin = (arg) =>{
   const user = jwt_decode(arg)
   console.log(user)
  }
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/register' exact element={<Register/>} />
        <Route path='/login' exact element={<Login login={handlelogin}/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
