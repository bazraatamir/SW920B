import React,{useEffect} from "react";
import { connect } from "react-redux";
import { loadCategory } from "../action/categoryAction";

function Category({category,loading,error,loadCategory}) {

    useEffect(()=>{
        loadCategory()
    },[])
    
    return ( 
        <div className=" w-full bg-blue-500 h-12 ">
            <div className="container h-full flex items-center justify-center ">
                <ul className="flex gap-10">
                    {category.map(category=>(
                    <li key={category._id}>{category.category}</li>
                    ))}
                    
                </ul>

            </div>

        </div>
     );
}
const mapStateToProps=(state)=>{
   
  return  {
        category:state.categoryReducer.category,
        loading:state.categoryReducer.loading,
        error:state.categoryReducer.error
    }
}
const mapDispatchToProps={
    loadCategory
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);
// mapDispatchToProps