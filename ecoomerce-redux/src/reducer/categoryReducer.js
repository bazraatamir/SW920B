const initialState = {
        category:[],
        loading:false,
        error:null
};


const categoryReducer = (state=initialState,action)=>{
    if(action.type=="LOAD_ACTIONS"){
        return {
            ...state,
            loading:true
        }
    }
    else if(action.type == "LOAD_SUCCESS"){
        return {
            ...state,
            category:action.category
        }
    }
    else if(action.type=="LOAD_FAILD"){
        return {
            ...state,
            error:action.error
        }
    }
    return state
}
export default  categoryReducer