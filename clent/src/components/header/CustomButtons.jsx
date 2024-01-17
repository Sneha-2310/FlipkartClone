import { Box,Button, Typography,Badge } from '@mui/material'
import React from 'react'
import {ShoppingCart} from '@mui/icons-material';
import styled from '@emotion/styled';
import LoginBox from '../login/LoginBox';
import { useState,useContext } from 'react';
import {DataContext} from '../../context/dataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Wrapper=styled(Box)`
display:flex;
margin :3% 0 auto;
&>button, &>p, &>div{
    margin-right: 40px;
    font-size:16px;
    align-items:center;
} 
`
const Container=styled(Link)(({theme})=>({
display:'flex',
textDecoration:'none',
color:'inherit',
// [theme.breakpoints.down('md')]:{display:'block'}
}));
const LoginButton=styled(Button)`
color:#2874f0;
background:#ffffff;
text-transform:none;
border-radius:3px;
font-weight:600;
padding:5px 40px;
height:32px;
box-shadow:none;
`

const CustomButtons = () => {

  const [open,setOpen]=useState(false);
  const {account,setAccount}=useContext(DataContext);
  const {cartItems}=useSelector(stste=>stste.cart);

  const openloginbox=()=>{
    setOpen(true);
  }
      console.log("cb");


  return (
    <Wrapper>
      
          { account ? 
          <Profile account={account} setAccount={setAccount}/>
          :
        <LoginButton variant='contained' onClick={()=>openloginbox()}>
            Login
        </LoginButton>
}
        
        <Typography style={{marginTop:3,width:135}}>Become a seller</Typography>
        <Typography style={{marginTop:3,}}>More</Typography>
        <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
        <ShoppingCart/>
        </Badge>
            <Typography style={{marginLeft:5}}>Cart</Typography>
        </Container>
        <LoginBox open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons