import User from '../model/user-schema.js';

export const userSignup = async(request,response) => {
  try{

  const exist = await User.findOne({username:request.body.username});
    if(exist){
      return response.status(401).json({message:'Username already exists'});
    }
    const user=request.body;
    console.log(user);
    const newUser=new User(user);
    await newUser.save();
    response.status(200).json({message:user});
  }
  catch(e){
    console.log('nahi :(');
    response.status(500).json({message:e.message});
  }
}

export const userLogin = async(request,response) => {
  try{

    const username=request.body.username;
    const password=request.body.password;
      let user= await User.findOne({username:username,password:password});    
        if(user){return response.status(200).json(`${username} login successful`)}
        else{
          return response.status(401).json('Invalid Login');
        }
    }
  catch(e){
    console.log(' login nahi hua :(');
    response.status(500).json({message:e.message});
  }
}

