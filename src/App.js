import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/general.scss'
import NavBar from './components/nav/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';

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
        
      </BrowserRouter>
    </div>
  );
}

export default App;