import Header from './component/header/header';
import Home from "./component/home/home";
import Create from "./component/create/crete"
import Register from './component/register/register';
import Login  from './component/login/login';
import style from './App.module.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className={style.App}>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Create' element={<Create/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/Login' element={<Login/>}/>

    </Routes>
  
   </div>
  </BrowserRouter>
  
  
  );
}

export default App;
