
import axios from "axios"



export const loadCategory = () =>{
    return (dispatch)=>{
        axios.get("http://localhost:3001/category").then(response=>{
                let data = response.data.data
                
                dispatch(successCategory(data))
            }).catch(err=>{
                 dispatch(errorCategory(err))
         })
    }
   
}
export const successCategory = (data)=>{
    return{
        type:"LOAD_SUCCESS",
        category:data
        
    }
}

export const errorCategory = (err)=>{
    return{
        type:"LOAD_FAILD",
        error:err
    }
}

