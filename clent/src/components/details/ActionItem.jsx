import { Box,Button,styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";



const LeftContainer=styled(Box)(({theme})=>({
    minWidth:'30%',
    padding:'40 0 0 80',
    [theme.breakpoints.down('lg')]:{
        padding: '20 40'
    }
}))
;
const Image=styled('img')({
    padding: '15px 20px',
    width: '95%'
});
const ButtonStyle=styled(Button)(({theme})=>({
width:'46%',
height:'50px',
borderRadius:'2px',
[theme.breakpoints.down('lg')]:{
width:'46%',
},
[theme.breakpoints.down('sm')]:{
    width:'48%'
}
}));
const ActionItem = ({product}) => {
    const nav=useNavigate();
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState(1);
    const {id}=product;

    const addItemToCart=()=>{
        // console.log(id);
        // console.log(quantity);
        dispatch(addToCart(id,quantity));
        nav('/cart');
    }

  return (
    <LeftContainer>
        <Box style={{padding:'15px 20px', border:'1px solid #f0f0f0'}}>
        <Image src={product.url} alt="product image"/>
        </Box>
        <ButtonStyle variant="contained" style={{marginRight:10,background:'#ff9f00'}}
        onClick={()=>addItemToCart()}>
            <ShoppingCartIcon/>Add to Cart</ButtonStyle>
        <ButtonStyle variant="contained" style={{background:'#ff'}} >
            <FlashOnIcon/>Buy Now</ButtonStyle>
    </LeftContainer>
  )
}

export default ActionItem