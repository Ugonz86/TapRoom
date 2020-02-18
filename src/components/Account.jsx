import React from 'react';
// import {Link} from 'react-router-dom';
import KegList from './KegList';
import Keg from './Keg';

const Account = () => {
  return (
    <div>
      <KegList employee={true}/>
      <Keg employee={true}/>
    </div>
  );
};

export default Account;


