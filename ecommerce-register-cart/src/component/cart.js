import { BsPlus } from "react-icons/bs";
import { RxDividerHorizontal } from "react-icons/rx";

// BsPlusLg
// RxDividerHorizontal
function CartComponent() {
    return ( 
        <div className="container rounded drop-shadow-lg flex justify-center ">
            <div className=" w-10/12">
            <div className=" w-[100%]   flex justify-between   bg-blue-600 rounded-t-lg">
                <p className="w-[50%] h-[50px] text-white text-start mx-16 flex items-center ">
                    product
                </p>
                <p className="w-[30%] h-[50px] text-white flex items-center justify-center ">
                    quantity
                </p>
                <p className="w-[30%] h-[50px]  text-white flex items-center justify-center">
                    amount
                </p>
            </div>
            <div className=" w-[100%] my-16  flex   ">
                <div className="w-[55%] h-[100px]  flex  justify-center">
                    <div className="w-70%">
                        <img className="w-[100%] h-[100%] object-contain" src="https://m.media-amazon.com/images/I/41ZjUOH6nRL._AC_.jpg" alt="" />
                    </div>
                    <div className="w-[30%] h-[100%]">
                        <h3 >Iphone</h3>
                        <p >price: 300$</p>
                    </div>
                    
                </div>
                <div className="w-[20%] flex  items-center justify-center">
                        <button className="w-[20%] h-[40px]  text-2xl bg-blue-600 rounded flex justify-center items-center ">
                            <BsPlus/>
                        </button>
                        <input className="w-[20%] h-[40px] text-center" value='1'/>
                        <button className="w-[20%] h-[40px] text-2xl text-center bg-blue-600 rounded  flex justify-center items-center">
                            <RxDividerHorizontal/>
                        </button>
                </div>
                <div className="w-[25%] h-[100px] flex justify-center items-center text-2xl">
                    <p>300$</p>
                </div>
            </div>
            </div>
        </div> 
     );
}

export default CartComponent;