import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Asegurate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Keep It Flowing Logo" className="logo-navbar" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/tienda" className="nav-link">Tienda</Link>
      </div>
    </nav>
  );
}

export default Navbar;

