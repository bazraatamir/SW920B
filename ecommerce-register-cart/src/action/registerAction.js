import axios from "axios";

export const registerUser = ( {name,email,password})=>async(dispatch)=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ name, email, password });
      
      try{
          const res = await axios.post("http://localhost:3001/user",body,config)
          let userdata = res.data.message;
          dispatch(successRegister(userdata))
      }catch(error){
        errorRegister(error)
      }


}

  export const successRegister = (data)=>{
    return{
        type:"REGISTER_SUCCESS",
        info:data
        
    }
}

export const errorRegister = (err)=>{
    return{
        type:"REGISTER_FAILD",
        info:err
    }
}