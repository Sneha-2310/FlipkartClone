import { useState,useEffect } from 'react';
import { Box, InputBase,ListItem,List,styled } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer=styled(Box)`
    background:#fff;
    width:35%;
    border-radius:5px;
    margin-left:10px;
    display:flex;
`;
const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;
const SearchIconWrap=styled(SearchIcon) `
    color:blue;
    padding:5px;
`;
const ListWrap=styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-top:36px;
margin-left:0px
`

const Search = () => {
  const [text,setText]=useState('');

  const {products}=useSelector(state => state.getProducts);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const getText=(text)=>{
    setText(text);
  }
  return (
    <SearchContainer>
        <InputSearchBase
        placeholder='Search for products, brands and more'
        onChange={(e)=>getText(e.target.value)} value={text}/>
        
        <SearchIconWrap><SearchIcon/></SearchIconWrap>
        {
          text && 
            <ListWrap>{
                products.filter(product=>
                      product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                        <ListItem>
                          <Link to={`/product/${product.id}`} onClick={()=>setText('')}
                          style={{textDecoration:'none',color:'inherit'}}
                          >
                          {product.title.longTitle}
                          </Link>
                        </ListItem>
                      ))
            }</ListWrap>
        }
        
    </SearchContainer>
   
  )
}

export default Search