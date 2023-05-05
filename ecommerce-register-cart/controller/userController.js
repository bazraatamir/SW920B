const userSchema = require('../model/userModel');
const MyError = require('../utils/myError')



exports.createUser = async(req,res,next)=>{
    console.log(req.body)
    try{
        let user = await userSchema.create(req.body)
        res.status(200).json({
            success:true,
            message:"амжилтай бүртгэгдлээ"
        })
    }catch(err){
        next(err)
    }
   
};



exports.login = async(req,res,next)=>{
    try{
        const {email,password}= req.body;
    if(!email || !password){
       throw new MyError("email нууц үгээ оруулна уу",400)
    }
    const user = await userSchema.findOne({email:email}).select('+password');
    if(!user){
       throw new MyError("email нууц үгээ оруулна уу",400);
    }
    const enteredUser = await user.checkPassword(password);
    if(!enteredUser){
       throw new MyError("email нууц үгээ оруулна уу",400)
    }
    const token = user.getJwt();
   const cookieOption = {
    expires:new Date(Date.now()+2*24*60*60*1000)
   }
    return   res.status(200).cookie("token",token,cookieOption).json({
        success:true,
        data:user,
        token,
    })

    }catch(err){
        next(err)
    }

}
exports.logout = (req,res,next)=>{
    res.cookie('token',"").json("logout")
}