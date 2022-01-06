import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";


import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';



function App() {
  return (
    <div className="App">
      {/*<ItemListContainer greeting = "Bienvenido a mi Pagina Web" />*/}        
      {/*<ItemDetailContainer/>*/}
      <BrowserRouter>
        <NavBar/>
        <h3 className="marca">RB Musculacion</h3>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:cId" element={<ItemListContainer/>}/>
          <Route path="/productos/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartWidget/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
