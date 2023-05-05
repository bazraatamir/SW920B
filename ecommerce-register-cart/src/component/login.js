function Login() {
    return ( 
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
             <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Нэтрэх
                 </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" >
                          <label className="block text-sm font-medium text-gray-700">
                             Э-майл
                        </label>
                        <input
                         type="text"
                         name="text"
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                         />
                          <label className="block text-sm font-medium text-gray-700">
                             Нууц үг
                        </label>
                        <input
                         type="text"
                         name="text"
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                         />
                          <button
                          type="submit"
                          className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                          >
                            Нэвтрэх
                         </button>
                         <span className="self-start">шинээр <a href="/register" className="underline text-blue-900">бүртгүүлэх</a> </span> 
                    </form>
                </div>
            </div>
        </div>

     );
}

export default Login;