import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Moment from 'moment';
import beer7 from '../assets/images/beer7.jpg';

var kegListMenu = {
  // display: 'inlineFlex',
  // textAlign: 'center',
  // wordSpacing: '250px',
  color: 'white',
  // backgroundColor: 'rgba(0, 0, 0, 0.69)',
  backgroundColor: 'black',
  paddingLeft: '20px',
  paddingBottom: '30px',
  marginBottom: '60px',
};

var picBoxStyle = {
  backgroundColor: 'transparent', 
  height: '300px',
};


var masterKegList = [
  {
    style: 'Dutch Pale Lager',
    brand: 'Heineken',
    alcoholVolume:'5',
    price: '6.00',
  },
  {
    style: 'Pilsner',
    brand: 'Stella Artois',
    alcoholVolume:'4.8',
    price: '5.00'
  },
  {
    style: 'Stout',
    brand: 'Guinness',
    alcoholVolume: '5.6',
    price: '4.00'
  }
];

function KegList(props){
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
        
        {masterKegList.map((keg, index) =>
          <Keg style={keg.style}
            brand={keg.brand}
            alcoholVolume={keg.alcoholVolume}
            price={keg.price}
            // employee={props.employee}
            key={index}/>
        )}
      
        {Object.keys(props.kegList).map(function(kegId) {
          var keg = props.kegList[kegId];
          return <Keg style={keg.style}
            brand={keg.brand}
            alcoholVolume={keg.alcoholVolume}
            price={keg.price}
            formattedWaitTime={keg.formattedWaitTime}
            employee={props.employee}
            currentRouterPath={props.currentRouterPath}
            key={kegId}
            kegId={kegId}
            onKegSelection={props.onKegSelection}/>;
        })}

        <div>
          <br />
          {props.employee ? <Link to="/newKeg" style={{ color: 'orange'}}>Add New Keg</Link> : null}
        </div>

      </div>
    </div>
    
    
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  employee: PropTypes.bool,
};

export default KegList;