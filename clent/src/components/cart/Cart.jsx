import { useSelector } from "react-redux"
import { Typography,Box ,Grid,styled, Button} from '@mui/material'
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";


const Container=styled(Grid)(({theme})=>({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]:{
    padding:'15px 0'
  }
}))

const Header=styled(Box)`
padding 15px 24px;
background:#fff;
`
const ButtonWrap =styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0/10%);
border-top:1px solid #f0f0f0
`
const StyleButton=styled(Button)`
display:flex;
margin-left:auto;
background:#fb641b;
color:#fff;
width:250px;
height:51px;
border-radius:2px;
`
const Left=styled(Grid)(({theme})=>({
  paddingRight:'15px',
  [theme.breakpoints.down('sm')]:{
    marginBottom:'15px'
  }
}))


const Cart = () => {
  const {cartItems}=useSelector(state=>state.cart);
    console.log(cartItems);

    
 return(<>
    
    {
      cartItems.length ? 
      <Container container>
        <Left item lg={9}md={12} xs={12}>
          <Header>
            <Typography>
              My Cart({cartItems?.length})
            </Typography>
          </Header>
          {
            cartItems.map(item=>(<CartItem item={item}/>))
          }
          <ButtonWrap>
            <StyleButton>Place Order</StyleButton>
          </ButtonWrap>
        </Left>
        <Grid item lg={3}md={3}xs={12}>
          <TotalView cartItems={cartItems}/>
        </Grid>
      </Container>
      :<EmptyCart/>
    }
  </>)
}

export default Cart