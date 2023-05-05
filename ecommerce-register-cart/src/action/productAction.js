import axios from "axios"

export const loadProduct = () =>{
    return (dispatch)=>{
        // type:"LOAD_ACTIONS";
        axios.get("http://localhost:3001/product").then(response=>{
                let data = response.data.data
                // console.log(data)
                dispatch(successProduct(data))
            }).catch(err=>{
                 dispatch(erroProduct(err))
         })
    }
   
}
export const successProduct = (data)=>{
    return{
        type:"LOAD_SUCCESS_PRODUCT",
        product:data
        
    }
}

export const erroProduct = (err)=>{
    return{
        type:"LOAD_FAILD_PRODUCT",
        error:err
    }
}

