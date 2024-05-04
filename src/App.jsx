import './App.css'
import {inventory} from "./constants/inventory.js";
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateOriginalStock from "./helpers/calculateOriginalStock.js";
import calculateProductsInStock from "./helpers/calculateProductsInStock.js";

function App() {
  return (
      <>
      <main className="dashboard-container">
        <h1>Tech it easy dashboard</h1>
        <section className="sales-overview">
          <h2>Verkoopoverzicht</h2>
          <div className="sales-overview__articles">
            <article className="sales-overview__item products-sold">
              <h3>Aantal verkochte producten</h3>
              <h2>{calculateSoldProducts(inventory)}</h2>
            </article>
            <article className="sales-overview__item products-original-stock">
              <h3>Aantal ingekochte producten</h3>
              <h2>{calculateOriginalStock(inventory)}</h2>
            </article>
            <article className="sales-overview__item products-in-stock">
              <h3>Aantal te verkopen producten</h3>
              <h2>{calculateProductsInStock(inventory)}</h2>
            </article>
          </div>
        </section>
      </main>
      </>
  )
}

export default App
