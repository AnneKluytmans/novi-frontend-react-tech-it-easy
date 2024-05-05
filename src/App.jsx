import './App.css'
import minus from './assets/minus.png';
import check from './assets/check.png';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateOriginalStock from "./helpers/calculateOriginalStock.js";
import calculateProductsInStock from "./helpers/calculateProductsInStock.js";
import createTvName from "./helpers/createTvName.js";
import createTvPrice from "./helpers/createTvPrice.js";
import createTvScreenSizes from "./helpers/createTvScreenSizes.js";

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
        <section className="best-seller-overview">
          <h2>Best verkochte tv</h2>
          <article className="product best-selling-product">
            <span className="product__image">
              <img src={bestSellingTv.sourceImg} alt="Afbeelding van de best verkochte tv"/>
            </span>
            <div className="product__info">
              <h3>{createTvName(bestSellingTv)}</h3>
              <p className="product__price">{createTvPrice(bestSellingTv.price)}</p>
              <p>{createTvScreenSizes(bestSellingTv.availableSizes)}</p>
              <ul className="product__options-list">
                <li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                <li><img src={check} alt="Icoon: aanwezig" className="icon"/>hdr</li>
                <li><img src={check} alt="Icoon: aanwezig" className="icon"/>bluetooth</li>
                <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>
              </ul>
            </div>
          </article>
        </section>
        <section>
          <h2>Alle tvs</h2>
          <button type="button" /*onClick={sortBestSellers}*/>
            Meest verkocht eerst
          </button>
          <button type="button" /*onClick={sortCheapest}*/>
            Goedkoopste eerst
          </button>
          <button type="button" /*onClick={sortSport}*/>
            Meest geschikt voor sport eerst
          </button>
        </section>
      </main>
      </>
)
}

export default App
