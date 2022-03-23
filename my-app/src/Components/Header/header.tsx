import "./headet.scss";
import logo from "../../images/Food_delivery_cute_man_riding_motorcycles_cartoon_art_illustration.jpg";
import { Link } from "react-router-dom";
import letterY from "../../images/logoBlue.png";
import Sidebar from "../SideBar/SideBar";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Links from "./links";
import { GrClose } from "react-icons/gr";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="area">
        <div className="section">
          <div className="container">
            <div className="navbar-wrapper">
              <div role="button" className="name">
                <img src={letterY} alt="logo" />
                <Link to="/">Fruits</Link>
              </div>
               {/* <FiMenu className="burger" onClick={() => setOpen(!open)} /> */}
              {open && <Links />}
              {/* <GrClose className="close" onClick={() => setOpen(false)} />
              <FiMenu className="burger" onClick={() => setOpen(true)} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
