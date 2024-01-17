import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions.js';
import { useDispatch ,useSelector} from 'react-redux';
import Slide from '../home/Slide.jsx';
import MidSlide from './MidSlide.jsx';
import MidSection from './MidSection.jsx';

const Component=styled(Box)`
padding 20px 10px;
background:#F2F3F2;
`
const Home = () => {

  const {products} = useSelector(state => state.getProducts);
 
  console.log(products);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch]);

  return (
    <>
        <NavBar/>
        <Component>
          <Banner/>
          <MidSlide products={products} title="Deal of The day" timer={true}/> 
          <MidSection/>
          <Slide products={products} title="Discounts for you"timer={false}/> 
          <Slide products={products} title="Suggested Items" timer={false}/> 
          <Slide products={products} title="Top Selections" timer={false}/> 
          <Slide products={products} title="Reccomended Items" timer={false}/> 
          <Slide products={products} title="Trending offers" timer={false}/> 
          <Slide products={products} title="Seasons top picks" timer={false}/> 
          <Slide products={products} title="Top deals on Accesories"timer={false}/> 
        </Component>
        
    </>
  )
}

export default Home