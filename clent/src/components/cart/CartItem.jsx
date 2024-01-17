import { Box, Button, Typography,styled } from "@mui/material"
import { addEllipse } from "../../utils/common-utils"
import GroupedButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component=styled(Box)`
border-top:1px soli #f0f0f0;
display:flex;
background: #fff
`
const Left=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`
const Right=styled(Box)`

`
const smallText=styled(Typography)`
color:#878787';
font-size:14px;
margin-top:10px;
`
const Remove =styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:550;
`
const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const dispatch=useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }

  return (
    <Component>
        <Left>
            <img src={item.url}alt="product" style={{height:110}}/>
            <GroupedButton/>
        </Left>
        <Box style={{marin:20}}>
            <Typography>
                {addEllipse(item.title.longTitle)}
            </Typography>
            <smallText>
                Sellet:RetailNet
                <Box component='span'>
                <img src={fassured} style={{width:50,marfinLeft:10}}/></Box>
            </smallText>
            
            <Typography style={{margin:'20px 0'}}>
              <Box component='span' style={{fintWeight:600,fontSize:18}}>{item.price.cost}Rs.</Box>&nbsp;&nbsp;&nbsp;
              <Box component='span' style={{color:'#878787'}}><strike>{item.price.mrp}Rs.</strike></Box>&nbsp;&nbsp;
              <Box component='span' style={{color:'#388E3c'}}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={()=>{removeItemFromCart(item.id)}}>Remove</Remove>
        </Box>
    </Component>
  )
}

export default CartItem