import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"



export const loadCategory = () =>{
    return (dispatch)=>{
        // type:"LOAD_ACTIONS";
        axios.get("http://localhost:3001/categor").then(response=>{
                let data = response.data
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

