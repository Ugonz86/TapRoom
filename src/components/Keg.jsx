import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      {/* <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style> */}

      <h3>{props.style} - {props.brand} - {props.alcoholVolume}</h3>
      <p><em>{props.price}</em></p>
      <hr/>
    </div>
  );
}
Keg.propTypes = {
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};

export default Keg;