import Arrow from "../../Svg/arrow";
import { NavLink } from "react-router-dom";

export default function CatalogCards(prop: any) {
  return (
    <div className="img-card iCard-style4">
      <div className="card-content">
        <div className="card-image">
          <span className="card-caption"></span>
          <NavLink to={prop.component}>
            <img src={prop.image} alt={prop.alt} />
          </NavLink>
        </div>

        <div className="card-title">
          <span>{prop.title}</span>
          <div className="toggle">
            <NavLink to={prop.component}>
              <Arrow />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
