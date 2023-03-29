const postSchema = require('../model/post');
const path = require('path');


exports.getPosts = async(req,res,next)=>{
    try{
        const data = await postSchema.find();
        res.status(200).json({
            success:false,
            error:data
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
}

exports.createPost = async(req,res,next)=>{
    console.log(req.body)
    console.log(req.files.file);
    try{
        const file = req.files.file
    if(!file.mimetype.startsWith("image")){
        return  res.status(400).json({
            success:false,
            error:"зураг оруулна уу"
        })
    }
    if(file.size>100000){
        return  res.status(400).json({
            success:false,
            error:"зурагны хэмжээ хэтэрсэн байна"
        })
    }
    let filename= file.name;
 
    file.mv(`./upload/${filename}`,(err)=>{
        if(err){
            return  res.status(400).json({
                success:false,
                error:"зурагны хуулах явцад алдаа гарлаа"
            })
        }
   
    })
    const {title,description} = req.body
        let post = await postSchema.create({
            title,
            photo:filename,
            description
        });
        res.status(200).json({
            success:true,
            data:post
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
};


