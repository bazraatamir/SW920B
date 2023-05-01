import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { loadCategory } from "../action/categoryAction";
function ProductCard() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadCategory())
    },[])
    const product = useSelector(state=>state);
    console.log(product)

    return ( 
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src='https://www.apple.com/v/iphone-14/h/images/key-features/features/size/size_yellow__dnv9794q7loy_large.jpg' alt="Iphone" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Lorem.</div>
        <p className="text-gray-700 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere alias vero laborum nesciunt ratione consequuntur? Nemo quas, doloremque minus magnam aperiam rerum possimus dolorum laborum aspernatur, provident hic quos.</p>
      </div>

      <div className="px-6 py-4">
        <span className="font-bold text-xl">300$</span>
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
     );
}

export default ProductCard;