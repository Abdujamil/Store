import CatalogCards from "./catalog-cards";
import DriedFruits from "./catalog-driedFruits/driedFruits";
import Fruits from "./catalog-fruits/fruits";
import Vegatables from "./catalog-vegatables/vegatables";
import "./catalog.scss";

export default function Catalog() {

  return (
    <>
      <div className="section-catalog" id="catalog">
        <div className="container-catalog">
          <div className="catalog-section">
            <h1>Каталог</h1>
            <div className="cards">
              <CatalogCards
                component={"fruits"}
                image='https://images.unsplash.com/photo-1546630392-db5b1f04874a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"'
                title="Фрукты"
              />
              <CatalogCards
                component={"driedFruits"}
                image='https://images.unsplash.com/photo-1633168850968-76be3bb0a2fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80"'
                title="Сухофрукты"
              />
              <CatalogCards
                component={"vegatables"}
                image='https://images.unsplash.com/photo-1546471364-2735697e52d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"'
                title="Овощи"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section-catalog" id="catalog">
      <h1>Каталог</h1>
     
    </div> */}
    </>
  );
}
