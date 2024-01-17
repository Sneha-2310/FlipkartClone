import { Typography,Box,TableBody,TableRow,TableCell,styled } from "@mui/material"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText=styled(Box)`
font-size:14px;
& > p{
    font-size:14px;
    margin-top:10px;
    vertical-align:baseline;
}
`;
const Badge=styled(LocalOfferIcon)`
margin-right:10px;
color:#00CC00;
font-size:15px;
margin-left:10px
`
const ColText=styled(TableRow) `
font-size:14px;
vertical-align:baseline;

& > td{
    font-size:14px;
    margin-top:10px;
    border:none; 
}
`

const ProductDetail = ({product}) => {
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
    <>
    <Typography>Available offers</Typography>
    <SmallText>
        <Typography><Badge/>Get extra 20% off upto 50Rs. on 1 item(s) T&C</Typography>
        <Typography><Badge/>Get extra 13% off upto 100Rs. on 1 item(s) T&C</Typography>
        <Typography><Badge/>Signup with Flipkart pay later and get Flipkart gift cards </Typography>
        <Typography><Badge/>Buy 2 items and save 10%</Typography>
        <Typography><Badge/>5% off on Axis bank credit card</Typography>
    </SmallText>
    <TableBody>
        <ColText >
        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
        <TableCell style={{fontWeight:'600'}}>Delivery by {date.toDateString()}| 40 Rs. </TableCell>
        </ColText >
        <ColText >
        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
        <TableCell >No Warranty </TableCell>
        </ColText >
        <ColText >
        <TableCell style={{color:'#878787'}}>Seller</TableCell>
        <TableCell style={{color:'#2874f0'}}>
            <Box>SuperComNet</Box> 
            <Typography>GST InvoiceAvailable</Typography>
        </TableCell>
        </ColText >
        <ColText>
            <TableCell colSpan={2}>
                <img src={adURL} style={{width:390}} alt="flipkart coins"/>
            </TableCell>
        </ColText>
        <ColText>
            <TableCell style={{color:'#878787' }}>Description
            </TableCell>
            <TableCell>{product.description}</TableCell>
        </ColText>
    </TableBody>
    </>
  )
}

export default ProductDetail