const initialState = {
    message:null,
    loading:false,
    error:null
};


const userReducer = (state=initialState,action)=>{
    const {type,info} = action
    
    switch (type) {
        case "REGISTER_SUCCESS":
          return {
            ...state,
            message:info,
            loading: false
          };
        case "REGISTER_FAIL":
          return {
            ...state,
            error:info,
            loading: false,
            
          };
        default:
          return state;
        }
}
export default  userReducer