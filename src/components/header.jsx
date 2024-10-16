import { Link } from "react-router-dom";
import sportSeeLogo from "./../assets/SportSee_logo.png";
import "../sass/components/_header.scss";

function Header() {
  return (
    <header className="main-header">
      <Link to="/" className="logo-link">
        <img src={sportSeeLogo} alt="logo SportSee" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/">Profil</Link>
          </li>
          <li>
            <Link to="/">Réglage</Link>
          </li>
          <li>
            <Link to="/">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
