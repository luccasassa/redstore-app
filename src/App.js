import './styles/general.scss'
import NavBar from './components/nav/NavBar';
import Banners from './components/main/Banners'
import ItemListContainer from './components/main/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar/>
      <Banners/>
      <ItemListContainer productos={'Todos los productos'}/>
    </div>
  );
}

export default App;