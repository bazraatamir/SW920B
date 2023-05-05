const initialState = {
    product:[],
    loading:false,
    error:null
};


const productReducer = (state=initialState,action)=>{
if(action.type==="LOAD_ACTIONS"){
    return {
        ...state,
        loading:true
    }
}
else if(action.type === "LOAD_SUCCESS_PRODUCT"){
    return {
        ...state,
        product:action.product
    }
}
else if(action.type==="LOAD_FAILD_PRODUCT"){
    return {
        ...state,
        error:action.error
    }
}
return state
}
export default  productReducer