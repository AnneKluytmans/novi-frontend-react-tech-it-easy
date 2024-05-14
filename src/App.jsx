import './App.css';
import minus from './assets/minus.png';
import check from './assets/check.png';
import soldOut from './assets/out-of-stock.png';
import logo from './assets/tech_it_easy.png';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateOriginalStock from "./helpers/calculateOriginalStock.js";
import calculateProductsInStock from "./helpers/calculateProductsInStock.js";
import createTvName from "./helpers/createTvName.js";
import createTvPrice from "./helpers/createTvPrice.js";
import createTvScreenSizes from "./helpers/createTvScreenSizes.js";

function App() {
  function sortBestSellers() {
    inventory.sort((a, b) => {
      return b.sold - a.sold;
    });

    console.log(inventory);
  }

  function sortCheapest() {
    inventory.sort((a, b) => {
      return a.price - b.price;
    })

    console.log(inventory);
  }

  function sortSport() {
    inventory.sort((a, b) => {
      return b.refreshRate - a.refreshRate;
    })

    console.log(inventory);
  }

  function sortLargestScreen() {
    inventory.sort((a, b) => {
      const maxScreenSizeA = Math.max(...a.availableSizes);
      const maxScreenSizeB = Math.max(...b.availableSizes);

      return maxScreenSizeB - maxScreenSizeA;
    })

    console.log(inventory)
  }


  return (
      <>
        <main className="dashboard-container">
          <h1>Tech it easy dashboard</h1>
          <img src={logo} alt="Tech It Easy Logo" className="logo"/>
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

          <section className="available-brands">
            <h2>Beschikbare merken</h2>
            <ul>
              {inventory.map((product) => {
                return <li key={product.type}>{product.brand}</li>
              })}
            </ul>
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

          <section className="products-overview">
            <h2>Alle tv's</h2>
            <button type="button" onClick={sortBestSellers}>
              Meest verkocht eerst
            </button>
            <button type="button" onClick={sortCheapest}>
              Goedkoopste eerst
            </button>
            <button type="button" onClick={sortSport}>
              Meest geschikt voor sport eerst
            </button>
            <button type="button" onClick={sortLargestScreen}>
              Grootste schermgroottes eerst
            </button>
            {inventory.map((product) => {
              const isSoldOut = product.originalStock === product.sold;
              return (
                  <article className="product" key={product.type}>
                    {isSoldOut && <img src={soldOut} alt="Uitverkockt" className="sold-out-icon"/>}
                    <span className="product__image">
                    <img src={product.sourceImg} alt="Afbeelding van de tv"/>
                    </span>
                    <div className="product__info">
                      <h3>{createTvName(product)}</h3>
                      <p className="product__price">{createTvPrice(product.price)}</p>
                      <p>{createTvScreenSizes(product.availableSizes)}</p>
                      <ul className="product__options-list">
                        {product.options.map((option) => {
                          if (option.applicable === true) {
                            return <li key={option.name}><img src={check} alt="Icoon: aanwezig"
                                                              className="icon"/>{option.name}</li>
                          } else {
                            return <li key={option.name}><img src={minus} alt="Icoon: niet aanwezig"
                                                              className="icon"/>{option.name}</li>
                          }
                        })}
                      </ul>
                    </div>
                  </article>
              )
            })
            }
          </section>
        </main>
        <footer className="footer">
          <p>Tech It Easy Dashboard &copy; Tech It Easy 2024</p>
        </footer>
      </>
  )
}

export default App
