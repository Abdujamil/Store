import style from "./driedFruits.module.scss";
import DriedFruitsCard from "./card-driedFruits/card-driedFruits";
import Header from "../../Header/header";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Drawer from "../../Drawer/drawer";
import Back from '../../../images/left-arrow.png';
import Cart from "../../../images/cart.png";

export default function DriedFruits(prop) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      {cartOpen ? <Drawer onClose={() => setCartOpen(false)} /> : null}
      <div className={style.headerDriedFruits}>
        <NavLink to="/#catalog">
        <img src={Back} className={style.imageBack} alt="" />
        </NavLink>
        <img className={style.cart} onClick={() => setCartOpen(true)} src={Cart} alt="cart" />
      </div>
      <div className={style.sectionCatalogDriedfruits} id="driedfruits-catalog">
        <h1>Сухофрукты</h1>
        <div className={style.driedfruitsCards}>
          <DriedFruitsCard
            price={551.0}
            image="https://images.unsplash.com/photo-1595412017587-b7f3117dff54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
            title="Абрикос"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://resizer.mail.ru/p/6cc532de-30e1-53d6-b8ab-98716b47f07e/AAAcwE8vnrkJJDkvwWNhDBas77vEzSbsOHNOXhu8K--Cz_y5ZV-9VnLRcorzGiE2NyYc8bw8Bhl6Rc6zf3KJjY4lbhM.jpg"
            title="Чернослив"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://images.unsplash.com/photo-1629738601425-494c3d6ba3e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            title="Финики"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://images.unsplash.com/photo-1590785069874-a283f2c8d420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Изюм"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://ak.picdn.net/offset/photos/5d091ffc469b183482a1a662/medium/offset_827627.jpg"
            title="Персик"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://thumbs.dreamstime.com/b/dried-persimmon-17261399.jpg"
            title="Хурма"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://images.vitaminimages.com/pp/VF/Assets/Puritan_products_Amazon/053470.jpg"
            title="Кокос"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://www.u-buy.com.tw/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvQTFUNGRNVnAtOEwuX1NMMTUwMF8uanBn.jpg"
            title="Шиповник"
          />
          <DriedFruitsCard
            price={551.0}
            image="https://realfoodrealdeals.com/wp-content/uploads/2013/01/dehydrated-banana-chips-featured.jpg"
            title="Бананы"
          />
        </div>
      </div>
    </div>
  );
}
