import Work from "../Work/work";
import Header from "../Header/header";
import "./Home.scss";
import About from "../About/about";
import Catalog from "../Catalogs/catalog";
import Carousel from "../Carousel/carousel";
import Footer from "../Footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home" id="home">
        <Carousel />
      </div>
      <About />
      <Catalog />
    </>
  );
}
