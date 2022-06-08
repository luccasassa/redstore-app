import './styles/general.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer titulo="Todos los Productos"/>}/>
            <Route path='*' element={<ItemListContainer titulo={'PAGE NOT FOUND'} />}/>
            <Route path='/Carrito' element={<ItemListContainer titulo="Carrito de mentida xd"/>}/>

            <Route path='/Categoria/:categoryId' element={<ItemListContainer />}/>
            <Route path='/Producto/:productId' element={<ItemDetailContainer />}/>
          </Routes>

          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;