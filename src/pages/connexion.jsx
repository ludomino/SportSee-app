import { Link } from "react-router-dom";
import "../sass/pages/_connexion.scss";


function Connexion() {
  return (
    <div className="section">
      <h1>Connexion</h1>
      <ul>
        <li>
          <Link to="/profile/12">
            <p>Karl</p>
            <p>(id: 12)</p>
          </Link>
        </li>
        <li>
          <Link to="/profile/18">
            <p>Cécilia</p>
            <p>(id: 18)</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Connexion;
