import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer7 from '../assets/images/beer7.jpg';

var kegListMenu = {
  color: 'white',
  backgroundColor: 'black',
  paddingLeft: '60px',
  paddingRight: '60px',
  paddingBottom: '30px',
  marginBottom: '60px',
};

var picBoxStyle = {
  backgroundColor: 'transparent', 
  height: '400px',
};

const KegList = (props) => {
  return (
    <div>

      <div className="introBox" style={picBoxStyle}>
        <style jsx global>{`
              .introBox {
                background: url(${beer7}) no-repeat center center;
                background-size: cover;
              }
            `}</style>
      </div>
      <div style={kegListMenu}>
        <br />
        <h1 style={{ letterSpacing: '6px', fontSize: '50px'}}><center>Our Keg List</center></h1>
        <br />
        <hr />
      
        {Object.keys(props.kegList).map(function(kegId) {
          var keg = props.kegList[kegId];
          return <Keg style={keg.style}
            brand={keg.brand}
            alcoholVolume={keg.alcoholVolume}
            price={keg.price}
            formattedWaitTime={keg.formattedWaitTime}
            currentRouterPath={props.currentRouterPath}
            key={kegId}
            id={kegId}
            onKegSelection={props.onKegSelection}
            employee={props.employee}
            onEditKeg={props.onEditKeg}
          />;
       
        })}
        
        <div>
          {props.employee ? <Link to="/newKeg" style={{ color: 'orange'}}>Add New Keg</Link> : null}
        </div>
      </div>
    </div>
    
  );
};

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  employee: PropTypes.bool,
  onEditKeg: PropTypes.func
};

export default KegList;