import userModel from "../models/user.js";
class userControllers {
    static createUser = async (req,resp)=>{
const {name,email,age} = req.body

const {filename} = req.file

try {
    
     if(name && email && age && filename){
const newUser = new userModel({
    name:name,
    email:email,
    age:age,
    profile:filename
})
const new_user = await newUser.save()
if(new_user){
return resp.status(200).json(new_user)
}
else{
    return resp.status(400).json({message:'something went wrong'})
}
    }
    else{

        return resp.status(400).json({message:"All fields are required"})

    }
} catch (error) {
    return resp.status(400).json(error)
}
    }; 
    static getAllUser = async (req,resp)=>{
        try {
            const allUsers = await userModel.find({});
if(allUsers){
    return resp.status(200).json(allUsers)
}            
else{
    return resp.status(400).json({ message:'something went wrong'})
}
        } catch (error) {
            return resp.status(400).json(error)            
        }

    }; 
}
export default userControllers