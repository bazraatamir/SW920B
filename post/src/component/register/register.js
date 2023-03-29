import { useState } from "react";
import axios from "../../axios"

function Register () {
    const [name,setName]=useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword]= useState(null);
    const [error,setError] = useState(null)
  const   handeleName = (e)=>{
      setName(e.target.value)
    }
  const  handeleEmail = (e)=>{
      setEmail(e.target.value)
    }
  const   handelePassword = (e)=>{
      setPassword(e.target.value)
    }
  const handeleClick = async()=>{
    try{
      const response = await axios.post('/user',{
        userName:name,
        email:email,
        password:password
      })
      console.log(response)
    }catch(err){
      setError(err.response.data.error.message)
    }
       
  }

    return ( 
        <div>
            {error && <div>{error}</div>}
            <input type="text" onChange={handeleName} />
            <input type="text" onChange={handeleEmail} />
            <input type="possword" onChange={handelePassword} />
            <button onClick={handeleClick}>register</button>
        </div>
     );
}

export default Register;