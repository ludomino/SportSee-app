import "../sass/components/_sidebar.scss";
import { Link } from "react-router-dom";
import iconZen from "./../assets/icon_zen.png";
import iconSwim from "./../assets/icon_swim.png";
import iconBike from "./../assets/icon_bike.png"; // correct this import (bike icon)
import iconStrenght from "./../assets/icon_strenght.png";

function Sidebar() {
  return (
    <aside className="aside">
      <nav>
        <ul>
          <li>
            <Link to="#">
              <img src={iconZen} alt="icon zen" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={iconSwim} alt="icon nage " />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={iconBike} alt="icon vélo " />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={iconStrenght} alt="icon altère" />
            </Link>
          </li>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;
