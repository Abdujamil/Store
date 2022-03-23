import React from "react";
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

import style from "./drawer.module.scss";

export default function Drawer(prop:any) {

  
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <div className={style.text}>
          <h2>Корзина</h2>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={prop.onClose}
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="7.5"
              fill="white"
              stroke="#DBDBDB"
            />
            <path
              d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
              fill="#B5B5B5"
            />
          </svg>
        </div>
        <div className={style.items}>
          <div className={style.itemImage}>
              <img src={prop.image} alt="fruit" />
              <span>{prop.title}</span>
              <p>Цена: {prop.price} руб.</p>
          </div>
        </div>
      </div>
    </div>
  );
}