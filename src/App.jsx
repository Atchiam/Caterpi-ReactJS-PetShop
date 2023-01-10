import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/cart';
import Checkout from './components/Checkout';
import Gracias from './components/Gracias';


function App() {
  return (
    <div className='bg-info text-dark bg-opacity-10'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={"/home"} element= {<Home/>}/>
            <Route path={"/"} element= {<ItemListContainer/>}/>
            <Route path={"/tienda"} element= {<ItemListContainer/>}/>
            <Route path={"/category/:id"} element= {<ItemListContainer/>}/>
            <Route path={"/item/:id"} element= {<ItemDetailContainer/>}/>
            <Route path={"/cart"} element= {<Cart/>}/>
            <Route path={"/checkout"} element= {<Checkout/>}/>
            <Route path={"/gracias/:id"} element= {<Gracias/>}/>
            <Route path={"*"} element= {<Error404/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
