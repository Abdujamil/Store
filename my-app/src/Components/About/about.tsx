import Deliver from "../../Svg/deliver";
import Style from "./about.module.scss";
import DeliverImage from "../../images/6447.jpg";
// import { Spline } from "react-spline"; 

export default function About() {
  return (
    <div className={Style.sectionAbot} id="about">
      <div className={Style.containerAbout}>
        <div className={Style.aboutSection}>
          <div className={Style.text}>
            <h2>О ДОСТАВКЕ</h2>
            <p>
              Мы находимся в Екатеринбурге. Вы можете самостоятельно забрать
              покупку из точки самовывоза или заказать доставку курьером по
              городу.
            </p>
          </div>
          <div className={Style.image}>
            {/* <Deliver /> */}
            {/* <img src={DeliverImage} alt="deliver" /> */}
            <img src="https://images.unsplash.com/photo-1571175351975-2428c97b098e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
            {/* <main>
              <Spline scene="https://draft.spline.design/v0tJTXdN-3UuYDTb/scene.spline" />
            </main> */}
          </div>
        </div>
      </div>
    </div>
  );
}
