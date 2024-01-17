import { AppBar, Toolbar, Typography,Box ,Drawer,styled,List,ListItem, IconButton} from '@mui/material'
import React from 'react'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyledHeader=styled(AppBar)`
background: #2874f0;
height:55px
`
const Menu=styled(IconButton)(({theme})=>({
  display:'none',
  [theme.breakpoints.down('md')]:{display:'block'}
}));

const Component=styled(Link)`
margin-left:12%;
textDecoration:none;
color:inherit;
`
const SubHeading=styled(Typography)`
font-size:12px;
font-style: italic;
`
const Plus=styled('img')({
  width:10,
  height:10,
  marginLeft:4,
});
const CustomButtonWrap=styled(Box)(({theme})=>({
  margin:'0 0 auto auto',
  [theme.breakpoints.down('md')]:{display:'none'}

}))
;

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open,setOpen]=useState(false);

  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  }
  
  const list=()=>{
    <Box>
      <List>
        <ListItem button>
          <CustomButtons/>
        </ListItem>
      </List>
    </Box>
  }

  return (
    <div>
      <StyledHeader>
        <Toolbar style={{minHeight:55}}>
          <Menu color='"inherit' onClick={handleOpen}>
            <MenuIcon/>
          </Menu>
          <Drawer open={open} onClose={handleClose} >
            {list()}
          </Drawer>
          <Component to='/'>
            <img src={logoURL} alt="logo" style={{width:75}} />
            <Box style={{display:'flex'}}>
            <SubHeading>Explore &nbsp;
              <Box component="span" style={{color:'#ffe500'}}>
              Plus
              </Box>
              </SubHeading>
              <Plus src={subURL} alt="" />
            </Box>
          </Component>
          <Search/>
          <CustomButtonWrap>
          <CustomButtons/>
          </CustomButtonWrap>
        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header