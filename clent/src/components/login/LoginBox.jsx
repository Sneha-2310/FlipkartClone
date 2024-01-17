import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box,Button,TextField,Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useState ,useContext} from 'react';
import { authenticateSignup ,authenticateLogin} from '../../service/api';
import {DataContext} from '../../context/dataProvider';

const Component=styled(Box)`
height:70vh;
width:90vh;
`
const Image=styled(Box)`
background:#2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) 
center 85% no-repeat;
height:82%;
width:28%;
padding : 45px 35px;
&>p,&>h5{
    color:white;
    font-weight:600;
}

`
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
&>div ,&>button,&>p{margin-top:20px}
`
const LoginButton=styled(Button)`
text-transorfm:none;
background:orange;
color:#fff;
height:48px;
border-radius:2px;
`
const OtpButton=styled(Button)`
text-transorfm:none;
background:#fff;
color:#287f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`
const Text=styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAcc=styled(Typography)`
font-size:14px;
text-align:center;
color:#287f0;
font-weight:600;
cursor:pointer;
`
const Error=styled(Typography)`
font-size:10px;
color:red;
line-height:0;
margin-top:10px;
font-weight:600;
`
const initial={
    login:{
        view:'login',
        heading:"Login",
        subheading:"Get access to your orders and wishlists"
    },
    signup:{
        view:'signup',
        heading:"Looks like you are new here!",
        subheading:"Sign up with your mobile number to get started"
    }
};
const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const loginInitialValues={
    username:'',
    password:''
}
const LoginBox = ({open,setOpen}) => {

    const [account,toggleAccount]=useState(initial.login);
    const [signup,setsignup]=useState(signupInitialValues);
    const [login,setLogin]=useState(loginInitialValues);
    const[error,setError]=useState(false);
    const{setAccount}=useContext(DataContext);
    
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(initial.login);
        setError(false);
    }
    const toggleAcc=()=>{
        toggleAccount(initial.signup);
    }
    const onInputChange=(e,x)=>{
        setsignup({...signup,[e.target.name]:e.target.value});
        console.log(e.target.name);
        console.log(e.target.value);
    }
    const signupUser=async()=>{
        let response=await authenticateSignup(signup);
        console.log(response);
        if(!response)return;
        handleClose();
        setAccount(signup.firstname);
        // console.log(account);
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }
    const loginUser=async()=>{
        let response=await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(login.username);
        }
        else{
            setError(true);
        }
    }
  return (
    <>
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
           <Component>
            <Box style={{display:'flex', height:'100%'}}>
                <Image>
                    <Typography variant='h5'>
                    {account.heading}
                    </Typography>
                    <Typography style={{marginTop:20, }}>
                    {account.subheading}
                    </Typography>
                </Image>
                {account.view==='login'?
                <Wrapper>
                    <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='username' label="Enter Username"/>
                    <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='password'label="Enter password"/>
                    
                    {error && <Error>Please enter valid username and password</Error>}

                    <Text>By continuing you agree to Flipkarts terms and policies.</Text>
                    <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <OtpButton>Request OTP</OtpButton>
                    <CreateAcc onClick={()=>toggleAcc()}>New to Flipkart? Create Account</CreateAcc>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)}name='firstname' label="Enter first name"/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)}name='lastname' label="Enter last name"/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)}name='username' label="Enter user name"/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)}name='email' label="Enter email"/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)}name='password' label="Enter password"/>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)}name='phone' label="Enter phone number"/>
                    <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                </Wrapper> 
            }
            </Box>
           </Component>
        </Dialog>
    </>
  )
}

export default LoginBox