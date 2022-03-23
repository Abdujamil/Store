import "./fruitCard.scss";

export default function FruitsCard({ id, title, image, price, onPlus }) {
  const obj = { id, parentId: id, title, image, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  return (
    <div className="simple-img-card iCard-style4">
      <div className="simple-card-content">
        <div className="simple-card-image">
          <span className="simple-card-caption"></span>
          <img src={image} alt="fruit" />
        </div>

        <div className="simple-card-title">
          <span>{title}</span>
        </div>
        <div className="simple-toggle">
          <p>Цена: {price} руб.</p>
          <div className="simple-plus">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClickPlus}
            >
              <path
                d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                fill="#D3D3D3"
              />
            </svg>
          </div>
        </div>

        <div className="simple-card-text"></div>
      </div>
    </div>
  );
}
