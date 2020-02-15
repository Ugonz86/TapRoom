import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// var masterKegList = [
//   {
//     style: 'Dutch Pale Lager',
//     brand: 'Heineken',
//     alcoholVolume:'5%',
//     price: '$6.00'
//   },
//   {
//     style: 'Pilsner',
//     brand: 'Stella Artois',
//     alcoholVolume:'4.8%',
//     price: '$5.00'
//   },
// ];

function KegList(props){
  console.log(props.kegList);
  return (
    <div>
      <h1>Our Keg List</h1>
      <hr />
      {props.kegList.map((keg) =>
        <Keg style={keg.style}
          brand={keg.brand} alcoholVolume={keg.alcoholVolume}
          price={keg.price}
          key={keg.id}/>
      )}
      <div>
        <Link to="/newKeg" style={{ color: 'black'}}>Add New Keg</Link>
      </div>
    </div>
    
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;