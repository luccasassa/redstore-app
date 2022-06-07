import './styles/general.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path='/' element={<ItemListContainer titulo={'Todos los productos'}/>}/>
          <Route path='*' element={<ItemListContainer titulo={'PAGE NOT FOUND'} />}/>

          <Route path="/Categoria/:id" element={<ItemListContainer />}/>

          <Route path="/Producto/:id" element={<ItemDetailContainer />}/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;