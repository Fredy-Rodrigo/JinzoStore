import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Inicio = () => {
    return (
        <main>
            <section>
              {/* <ItemDetailContainer/> */}
              <ItemListContainer/>
              {/* <ItemListContainer categoria="OFERTAS Y PROMOCIONES"></ItemListContainer>
              <ItemListContainer categoria="NUEVO EN LA TIENDA"></ItemListContainer>
              <ItemListContainer categoria="LO MAS VENDIDO"></ItemListContainer> */}
            </section>
          </main>
    )
}

export default Inicio;