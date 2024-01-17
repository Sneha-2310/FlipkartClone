import axios from "axios";
import * as actionType from '../constants/cartConstants';

const URL='http://localhost:8000';

export const addToCart=(id,quantity)=>async(dispatch)=>{
try{
    // console.log('no');
    const {data} = await axios.get(`http://localhost:8000/product/${id}`);
    // console.log(data);
    dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}});
}
catch(e){
    dispatch({type:actionType.ADD_TO_CART_ERROR,payload:e.message});

}
}
export const removeFromCart=(id)=>(dispatch)=>{
dispatch({type:actionType.REMOVE_FROM_CART,payload:id});
}