import React from 'react';
import { Link } from 'react-router-dom';
// import NewKegForm from './NewKegForm';
// import KegList from './KegList';
// import Keg from './Keg';

var patronStyle = {
  textAlign: 'center',
  fontSize: '20px',
  
  letterSpacing: '5px',
  fontFamily: 'Montserrat, sans-serif'
};

function Patron(){
  return (
    <div style={patronStyle}>
      <h1>Hello Patron!</h1>
      <Link to="/newKeg" style={{ color: 'black'}}>Add New Keg</Link> <br /><br /> <Link to="/kegList" style={{ color: 'black'}}>Keg List</Link>
    </div>
  );
}

export default Patron;