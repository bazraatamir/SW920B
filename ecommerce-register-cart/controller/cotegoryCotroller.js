const categorySchema = require('../model/category');
const MyError = require("../utils/myError")

exports.getCategories =async (req,res,next)=>{
    try{
        let data = await categorySchema.find();
        res.status(200).json({
            success:true,
            data:data
        })
    }catch(err){
        next(err)
    }
}
exports.getCategory =async (req,res,next)=>{
    try{
        let data = await categorySchema.findById(req.params.id).populate('products');
            if(data==null){
              throw new MyError(`${req.params.id } id -той категор олдсонгүй`,400)
            }
        res.status(200).json({
            success:true,
            data:data
        })
    }catch(err){
        next(err)
    }
}

exports.createCategory = async(req,res,next)=>{

    try{
    let data = await categorySchema.create(req.body)
    res.status(200).json({
        success:true,
        data:data
    })
    }catch(err){
        next(err)
    }
}