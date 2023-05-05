const productSchema = require('../model/product');
const MyError = require("../utils/myError")

exports.getProduct =async (req,res,next)=>{
    try{
        let data = await productSchema.find();
        if(!data){
            throw new MyError(`  бүтээгдэхүү нь  олдсонгүй`,400)
          }
        res.status(200).json({
            success:true,
            data:data
        })
    }catch(err){
        next(err)
    }
}


exports.createProduct = async(req,res,next)=>{
    try{
    let data = await productSchema.create(req.body);
    res.status(200).json({
        success:true,
        data:data
    })
    }catch(err){
        next(err)
    }
}