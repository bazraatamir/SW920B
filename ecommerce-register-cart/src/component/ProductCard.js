import { useEffect,useCallback } from "react";
import { loadProduct } from "../action/productAction";
import {connect} from "react-redux"
function ProductCard({product,loading,error,loadProduct}) {
    
    useEffect(()=>{
        loadProduct()
    },[])
    console.log(product)

    return ( 
      <>
        {product && product.map(product=>(
          <div key={product._id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={`${product.photo}`} alt="Iphone" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>

      <div className="px-6 py-4">
        <span className="font-bold text-xl">{product.price}$</span>
        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
        ))}
      
      </>
    
     );
}
const mapStateToProps=(state)=>{

  return  {
        product:state.productReducer.product,
        loading:state.productReducer.loading,
        error:state.productReducer.error
    }
}
const mapDispatchToProps={
    loadProduct
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);