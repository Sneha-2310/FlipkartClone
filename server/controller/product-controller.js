import Product from '../model/product-schema.js';

export const getProducts = async(request,response) => {
  try{
   const products=await Product.find({});
    response.status(200).json(products);
}
  catch(e){
    response.status(500).json({message:e.message});
  }
}
export const getProductById=async(request,response)=>{
  try{
    const id=request.params.id;
    const product=await Product.findOne({'id':id});
    response.status(200).json(product);
  }
  catch(e){
    response.status(500).json({message:e.message});
  }
}

