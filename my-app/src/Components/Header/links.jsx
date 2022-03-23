import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links-wrapper">
      <Link to="/">Главная страница</Link>
      <a href="#about">О доставке</a>
      <a href="#catalog">Каталог</a>
      <a href="#contacts">Контакты</a>
    </div>
  );
}
