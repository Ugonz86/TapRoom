import React from 'react';
import { Link } from 'react-router-dom';
// import NewKegForm from './NewKegForm';
// import KegList from './KegList';
// import Keg from './Keg';

function Employee(){
  return (
    <div>
      <h1>Hello Employee!</h1>
      <Link to="/newKeg">Add New keg</Link> | <Link to="/kegList">Keg List</Link>
    </div>
  );
}

export default Employee;