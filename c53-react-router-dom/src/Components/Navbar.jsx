import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/saludos">Saludos</Link>
        </li>
        <li>
          <Link to="/sabores">Sabores disponibles</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Link to="/">
        <img src={logo} alt="Logo de react" />
      </Link>
    </nav>
  );
}
