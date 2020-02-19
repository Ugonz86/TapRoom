import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Keg(props){
  const kegInformation =
    <div>
      <div>
        <p style={{color: 'grey'}}>Style</p> <h2>{props.style}</h2>
        <p style={{color: 'grey'}}>Brand</p><h2>{props.brand}</h2>
        <p style={{color: 'grey'}}>Alcohol per volume</p><h2>{props.alcoholVolume}%</h2>
        <p style={{color: 'grey'}}>Price per glass</p><h2>${props.price}</h2>
        <p><em>{props.formattedWaitTime}</em></p>
        <Link to="/edit" style={{ color: 'orange'}}>Edit Keg</Link>
        <br />
        
        <hr/>
      </div>
        
    </div>;
  
  if (props.currentRouterPath === '/employee'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
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
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired,
};

export default Keg;