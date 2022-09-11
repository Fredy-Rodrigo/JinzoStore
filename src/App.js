import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Ofertas from './pages/Ofertas';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <div className="app-container">
        <header>
          <NavBar/>
        </header>

        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/ofertas' element={<Ofertas/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/item/:id' element={<Detail/>}/>
          <Route path='/cart' element={<Checkout/>}/>
          <Route path='*' element={<h1>Error 404: Página no encontrada</h1>}/>
        </Routes>

        <footer>
          <Footer/>
        </footer>
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
