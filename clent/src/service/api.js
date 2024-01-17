import axios from'axios';

const URL='http://localhost:8000';

export const authenticateSignup=async(data)=>{
    try{
       return await axios.post(`${URL}/signup`,data);
    }
    catch(e){
        console.log('error ');
    }
}


export const authenticateLogin=async(data)=>{
    try{
       return await axios.post(`${URL}/login`,data);
    }
    catch(e){
        console.log('error in login');
        return e.response;
    }
}
