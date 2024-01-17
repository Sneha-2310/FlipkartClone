
import { Box, Typography ,styled} from "@mui/material"; 
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
// import Product from "../../../../server/model/product-schema";
import ActionItem from "./ActionItem";
import Grid from '@mui/material/Grid';
import ProductDetail from "./ProductDetail";

const Component=styled(Box)`
background:#F2F2F2;55px;
margin-top:
`;
const Container=styled(Grid)(({theme})=>({
  background:'#FFFFFF',
  display:'flex',
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}))

const RightContainer=styled(Grid)`
margin-top:50px;

`;

const DetailView = () => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const dispatch=useDispatch();
    const {id}=useParams();

    const{loading,product} = useSelector(state=>state.getProductDetails);
    
    useEffect(()=>{
      if(product && id !==product.id)
        dispatch(getProductDetails(id));
    },[dispatch, id, loading, product])
  
    console.log(product);
    return (
    <Component>
      {  product && Object.keys(product).length && 
      <Container container>
        <Grid item lg={4}md={4}sm={8}xs={12}>
        <ActionItem product={product}/>
        </Grid>
        <RightContainer item lg={8}md={8}sm={8}xs={12}>
          <Typography>{product.title.longTitle}</Typography>
          <Typography style={{marginTop:5,color:'#878787',fontSixe:14}}>
            8 Ratings and  1 Reviews
            <Box component='span'><img src={fassured}
            style={{width:77,
            marginLeft:20}}/></Box>
            </Typography>
            <Typography>
              <Box component='span' style={{fontSize:28}}>{product.price.cost}Rs.</Box>&nbsp;&nbsp;&nbsp;
              <Box component='span' style={{color:'#878787'}}><strike>{product.price.mrp}Rs.</strike></Box>&nbsp;&nbsp;
              <Box component='span' style={{color:'#388E3c'}}>{product.price.discount}</Box>
            </Typography>
            <ProductDetail product={product}/>
        </RightContainer>
      </Container>
      }
    </Component>
  )
}

export default DetailView