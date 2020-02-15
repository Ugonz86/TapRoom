import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  const kegInformation =
    <div>
      <h3>{props.style} - {props.brand} - {props.alcoholVolume}</h3>
      <p><em>{props.price}</em></p>
      <hr/>
    </div>
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {alert('hey, you just clicked the keg belonging to ' + props.style);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string
};

export default Keg;