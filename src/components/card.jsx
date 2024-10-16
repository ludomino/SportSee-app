import PropTypes from "prop-types";
import "../sass/components/_card.scss"; // Import the SCSS file

const Card = ({ title, count, img }) => {
  return (
    <div className="count-card"> {/* Use the class name for the card */}
      <img src={img} alt={`Logo ${title}`} />
      <div className="card-div"> {/* Use the class name for the inner div */}
        <p>{count}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
