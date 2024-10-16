import { Link } from "react-router-dom";
import "../sass/pages/_not_found.scss";

function NotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Quelque chose s&apos;est mal passé ... Revenez plus tard.</p>
      <Link to="/">Retour page d&apos;accueil</Link>
    </div>
  );
}

export default NotFound;
