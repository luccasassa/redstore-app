import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola soy una PROP"/>
    </div>
  );
}

export default App;