import './styles/general.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartContextProvider } from './context/CartContext';
import Footer from "./components/Footer";

const App = () => {

  const [cart, setCart] = useState()
  console.log(cart);

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer titulo="Todos los Productos"/>}/>
            <Route path='*' element={<ItemListContainer titulo={'PAGE NOT FOUND'} />}/>
            <Route path='/Categoria/:categoryId' element={<ItemListContainer />}/>
            <Route path='/Producto/:productId' element={<ItemDetailContainer />}/>
            
            <Route path='/Carrito' element={<Cart/>}/>
          </Routes>

          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;