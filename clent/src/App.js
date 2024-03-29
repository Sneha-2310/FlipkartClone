import './App.css';
import Home from './components/home/Home';
import Header from './components/header/header';
import { Box } from '@mui/material';
import DataProvider from './context/dataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Box style={{marginTop:54}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<DetailView/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </Box>  
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
