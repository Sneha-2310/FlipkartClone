import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

const DefaultData= async ()=>{
    try{
        await Product.insertMany(products);
        console.log('data imported succesfull in db'); 
    }
    catch(e){
        console.log(e.message);
    }

}
export default DefaultData;
