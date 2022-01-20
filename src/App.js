import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";


import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import CartContainer from './components/CartContainer';
import {productos} from './data/productos'


import db from './firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import {fileUpload} from './firebase/fileUpload'

function App() {

  const arrayUpload = () =>{
    productos.forEach(async(element)=>{
      const imgURl = await fileUpload(element.pictureUrl)

      addDoc(collection(db,'products'),{...element, image:imgURl})
    })
  }
  

  return (
    <div className="App">
      {/*<ItemListContainer greeting = "Bienvenido a mi Pagina Web" />*/}        
      {/*<ItemDetailContainer/>*/}
      <BrowserRouter>
        <NavBar/>
        <button onClick={arrayUpload}>SUBIR COSAS</button>
        <h3 className="marca">RB Musculacion</h3>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:cId" element={<ItemListContainer/>}/>
          <Route path="/productos/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
