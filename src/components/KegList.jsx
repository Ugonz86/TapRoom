import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    style: 'Dutch Pale Lager',
    brand: 'Heineken',
    alcoholVolume:'5%',
    price: '$6.00'
  },
  {
    style: 'Pilsner',
    brand: 'Stella Artois',
    alcoholVolume:'4.8%',
    price: '$5.00'
  },
];

function KegList(){
  return (
    <div>
      <hr />
      {masterKegList.map((keg, index) =>
        <Keg style={keg.style} brand={keg.brand} alcoholVolume={keg.alcoholVolume} price={keg.price} key={index}/>)}
    </div>
  );
}

export default KegList;