import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="app-container">

      <header>
        <NavBar/>
      </header>

      <main>
        <section>
          <ItemListContainer categoria="EN STOCK"></ItemListContainer>
          {/* <ItemListContainer categoria="OFERTAS Y PROMOCIONES"></ItemListContainer>
          <ItemListContainer categoria="NUEVO EN LA TIENDA"></ItemListContainer>
          <ItemListContainer categoria="LO MAS VENDIDO"></ItemListContainer> */}
        </section>
      </main>

    </div>
  );
}

export default App;
