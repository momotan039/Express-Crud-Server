
const jwt=require('jsonwebtoken')

const genearteToken=(user)=>{
 const token = jwt.sign(
    { role: user.role, username: user.username },
    "myseqtokvery",
    {
      expiresIn: "2m",
    }
  );
  return token;
}


const verifyToken=(token)=>{
  try{
    return jwt.verify(token,'myseqtokvery')
  }catch(err){
    return err.toString()
  }
}


module.exports={genearteToken,verifyToken}