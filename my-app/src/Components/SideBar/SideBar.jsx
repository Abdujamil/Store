import { useState } from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [status, setStatus] = useState("close");

  return (
    <nav>
      <div
        role="button"
        onClick={() => setStatus(!status === "open" ? "close" : "open")}
        className="sidebarMenu"
      >
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </div>
    </nav>
  );
}
