import React,{useEffect, useState} from "react";
import { Connect, connect } from "react-redux";
import { useDispatch } from "react-redux";
import { loadCategory } from "../action/categoryAction";

function Category({category,loading,error,loadCategory}) {

    useEffect(()=>{
        loadCategory()
    },[])
    console.log(category,loading,error)
    return ( 
        <div className=" w-full bg-blue-500 h-12 ">
            <div className="container h-full flex items-center justify-center ">
                <ul className="flex gap-10">
                    <li>эрэгтэй</li>
                    <li>эмэгтэй</li>
                    <li>хүүхэд</li>
                    <li>гэр ахуйн бараа</li>
                    <li>гар утас</li>
                </ul>

            </div>

        </div>
     );
}
const mapStateToProps=(state)=>{
  return  {
        category:state.category,
        loading:state.loading,
        error:state.error
    }
}
const mapDispatchToProps={
    loadCategory
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);
// mapDispatchToProps