import './styles/general.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
import Cart from './components/Cart';
import Form from './components/Form';
import { CartContextProvider } from './context/CartContext';
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>

        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer titulo="Todos los productos"/>}/>
            <Route path='*' element={<ErrorPage/>}/>
            <Route path='/:categoryId' element={<ItemListContainer />}/>
            <Route path='/:categoryId/:productId/:title' element={<ItemDetailContainer />}/>
            <Route path='/Formulario' element={<Form/>}/>
            
            <Route path='/Carrito' element={<Cart/>}/>
          </Routes>

          <Footer/>
        </BrowserRouter>

      </CartContextProvider>
    </div>
  );
}

export default App;