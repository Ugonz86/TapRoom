import React from 'react';
import PropTypes from 'prop-types';

var kegListHeader = {
  display: 'inlineFlex',
  // textAlign: 'center',
  // wordSpacing: '270px'
};
function Keg(props){
  const kegInformation =
    <div>
      <div style={kegListHeader}>
        Style <h1>{props.style}</h1>
        Brand <h2>{props.brand}</h2>
        Alcohol per volume<h3>{props.alcoholVolume}</h3>
        Price per keg<h3>{props.price}</h3>
        <p>Added {props.formattedWaitTime} ago</p>
        <br />
        <hr/>
      </div>
        
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {/* <div style={kegListHeader}>
        <h2>Style</h2>
        <h2>Brand</h2>
        <h2>Alcohol-Vol</h2>
        <h2>Price</h2>
      </div> */}
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
  kegId: PropTypes.string.isRequired
};

export default Keg;