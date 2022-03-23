import style from "./fruits.module.scss";
import FruitsCard from "./card-fruits/fruitsCard";
import Header from "../../Header/header";
import { NavLink } from "react-router-dom";
import Drawer from "../../Drawer/drawer";
import { useState, useEffect } from "react";
import Back from "../../../images/left-arrow.png";
import Cart from "../../../images/cart.png";
import axios from "axios";

export default function Fruits() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse] = await Promise.all([
          axios.get("https://62315f7b05f5f4d40d78e381.mockapi.io/Fruits"),
        ]);

        setCartItems(cartResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://62315f7b05f5f4d40d78e381.mockapi.io/Fruits/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://62315f7b05f5f4d40d78e381.mockapi.io/Fruits",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  return (
    <div className={style.fruitsBlock}>
      <div className={style.sectionCatalogFruits} id="fruits-catalog">
        <div className={style.headerFruits}>
          <NavLink to="/#catalog">
            <img src={Back} className={style.imageBack} alt="arrow" />
          </NavLink>
          <img
            className={style.cart}
            onClick={() => setCartOpen(true)}
            src={Cart}
            alt="cart"
          />
        </div>
        {cartOpen ? <Drawer onClose={() => setCartOpen(false)} /> : null}
        <h1>Фрукты</h1>
        <div className={style.fruitsCards}>
          <FruitsCard
            onPlus={(obj) => onAddToCart(obj)}
            price={551.0}
            image="https://images.unsplash.com/photo-1580636521086-7b0c742dd567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Гранат"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Яблоко"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1592965082982-6fea52485e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Груша"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1605164881986-cf242f87f711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            title="Виноград"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1527948132841-7fef35986128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
            title="Черешня"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1592681814168-6df0fa93161b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Абрикос"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Мандарин"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1606050627722-3646950540ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Банан"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1527948132841-7fef35986128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
            title="Черешня"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1592681814168-6df0fa93161b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Абрикос"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1607116692929-ece4c84a5992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Мандарин"
          />
          <FruitsCard
            price={182.0}
            image="https://images.unsplash.com/photo-1606050627722-3646950540ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Банан"
          />
        </div>
      </div>
    </div>
  );
}
