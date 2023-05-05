import React,{useState} from "react";
import { connect } from 'react-redux';
import { registerUser } from "../action/registerAction";
import { toast, ToastBar } from "react-hot-toast";
function SingUp({message,error,loading,registerUser}) {
     const [formData,setFormData]= useState({name:"",email:"" ,password:""})
     const { name, email, password } = formData;

     const handleCahnge = (e)=>setFormData({...formData,[e.target.name]:e.target.value})
     
     const handleSubmit = (e)=>{
          e.preventDefault();
          registerUser({name,email,password})
     }
     
   if(message !==null ){
     toast.success(message)
   }
    return ( 
     
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          {message && <p>{message}</p>}
             <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Бүртгүүлэх
                 </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6"  onSubmit={handleSubmit} >
                        <label className="block text-sm font-medium text-gray-700">
                             Нэр
                        </label>
                        <input
                         type="text"
                         name="name"
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                         onChange={handleCahnge}
                        />
                          <label className="block text-sm font-medium text-gray-700">
                             Э-майл
                        </label>
                        <input
                         type="text"
                         name="email"
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                         onChange={handleCahnge}
                         />
                          <label className="block text-sm font-medium text-gray-700">
                             Нууц үг
                        </label>
                        <input
                         type="text"
                         name="password"
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                         onChange={handleCahnge}
                        />
                          <button
                          type="submit"
                          className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                          >
                            Бүртгүүлэх
                         </button>
                         <span className="self-start">шинээр <a href="/login" className="underline text-blue-900">Нэвтрэх</a> </span> 
                    </form>
                </div>
            </div>
        </div>
     );
}
const mapStateToProps=(state)=>{
     
     return  {
           message:state.userReducer.message,
           loading:state.userReducer.loading,
           error:state.userReducer.error
       }
   }
   const mapDispatchToProps={
      registerUser
   }

export default connect(mapStateToProps,mapDispatchToProps)(SingUp);