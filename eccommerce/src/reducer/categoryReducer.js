const initialState = [
    {
        photo:'https://www.apple.com/v/iphone-14/h/images/key-features/features/size/size_yellow__dnv9794q7loy_large.jpg',
        title:"iphone",
        descroption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa minima iste in ad cupiditate vero ex, harum libero commodi et quod eveniet atque consectetur veniam dicta tenetur? Explicabo, reiciendis!",
        price:"300$"
    }
];


const categoryReducer = (state=initialState,action)=>{
    if(action.type=="LOAD_ACTIONS"){
        return state
    }
}
export default  categoryReducer