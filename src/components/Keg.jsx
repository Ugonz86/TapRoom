import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
      <div>
        <h3>{props.style} - {props.brand} - {props.alcoholVolume}</h3>
        <p><em>{props.price}</em></p>
        <hr/>
      </div>
   );
}
Keg.propTypes = {
    style: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    issue: PropTypes.string.isRequired,
    price: PropTypes.int.isRequired
};

export default Keg;