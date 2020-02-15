import React from 'react';
import { Link } from 'react-router-dom';
// import NewKegForm from './NewKegForm';
// import KegList from './KegList';
// import Keg from './Keg';

var employeeStyle = {
  textAlign: 'center',
  fontSize: '20px',
  
  letterSpacing: '5px',
  fontFamily: 'Montserrat, sans-serif'
};

function Employee(){
  return (
    <div style={employeeStyle}>
      <h1>Hello Employee!</h1>
      <Link to="/newKeg" style={{ color: 'black'}}>Add New keg</Link> <br /><br /> <Link to="/kegList" style={{ color: 'black'}}>Keg List</Link>
    </div>
  );
}

export default Employee;