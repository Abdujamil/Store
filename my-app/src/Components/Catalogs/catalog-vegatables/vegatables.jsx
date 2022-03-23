import style from "./vegatables.module.scss";
import Header from "../../Header/header";
import VegatablesCard from "./card-vegatables/card-vegatables";
import { NavLink } from "react-router-dom";

import Back from '../../../images/left-arrow.png';
import Drawer from "../../Drawer/drawer";
import { useState } from "react";
import Cart from "../../../images/cart.png";


export default function Vegatables(prop) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      {cartOpen ? <Drawer onClose={() => setCartOpen(false)} /> : null}
      <div className={style.sectionCatalogVegatables} id="fruits-catalog">
        <div className={style.headerVegatables}>
          <NavLink to="/#catalog">
          <img src={Back} className={style.imageBack} alt="" />
          </NavLink>
          <img className={style.cart} onClick={() => setCartOpen(true)} src={Cart} alt="cart" />
        </div>

        <h1>Овощи</h1>
        <div className={style.vegatablesCards}>
          <VegatablesCard
            price={551.0}
            image="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Картофель"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            title="Огурцы"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Помидоры"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1591586007768-40725cc562a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80"
            title="Капуста"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Лук"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1608737637507-9aaeb9f4bf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            title="Перец"
          />
          <VegatablesCard
            price={551.0}
            image="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Картофель"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            title="Огурцы"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Помидоры"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1591586007768-40725cc562a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80"
            title="Капуста"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Лук"
          />
          <VegatablesCard
            price={182.0}
            image="https://images.unsplash.com/photo-1608737637507-9aaeb9f4bf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            title="Перец"
          />
        </div>
      </div>
    </div>
  );
}
