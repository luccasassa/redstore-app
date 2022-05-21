import './styles/general.scss'

import NavBar from './components/NavBar';
import ItemCount from "./components/ItemCount";
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <hr/>
      <ItemCount initial="1" stock="5"/>
      <br />
      <ItemListContainer description="Initial(1) - Stock(5)"/>
    </div>
  );
}

export default App;