
import User from "../modal/user.modal.js";
import bcryptjs from 'bcryptjs';
const signup=async(req,res)=>{
  try {
    const {fullname,email,password}= req.body;
  const user= await User.findOne({email})
  if(user){
    return res.status(400).json({message:"User already exists"})
  }
  const hashedPassword= await bcryptjs.hash(password,10)
  const createuser= new User({
    fullname:fullname,
    email:email,
    password:hashedPassword
  })
  await createuser.save()
  res.status(201).json({message: "user created succssfully",
    user:{
      _id:createuser._id,
      fullname:createuser.fullname,
      email:createuser.email
    
  }})
  } catch (error) {
    res.status(500).json({message: "Internal server error"})
  }

};

const login =async(req,res)=>{
  try {
    const {email,password}= req.body;
    const user= await User.findOne({email});
    const ismatch= await bcryptjs.compare(password,user.password);
    if(!user || !ismatch){
      return res.status(400).json({message: "Invalid Credentials "})
    }
    else{
      res.status(200).json({message: "Login Succesfully",
        user:{
          _id:user._id,
          fullname:user.fullname,
          email:user.email
        }

      })
      
    }
  } catch (error) {
    console.log("Error: "+ error.message)
    res.status(500).json({message:"Interal Server error "})
  }
}







export {signup,login}