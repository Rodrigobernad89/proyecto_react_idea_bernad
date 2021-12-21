import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <h3 className="marca">RB Musculacion</h3>
      <ItemListContainer greeting = "Bienvenido a mi Pagina Web" />  
      
    </div>
  );
}

export default App;
