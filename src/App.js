//styles
import './styles/general.scss'
//components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo="Hola! Soy una PROP"/>
    </div>
  );
}

export default App;