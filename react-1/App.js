
import './App.css';
import { useState } from 'react';



function App() {
  const [InputName,setInputName] = useState('')

  return (
    <div className="App">
      <input type="text" placeholder='name' onChange={(e)=>{
        setInputName(e.target.value)
      }} />
      <h1>{InputName}</h1>
    
    </div>

  );
}

export default App;
