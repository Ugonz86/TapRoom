import React from 'react';
import KegList from './KegList';

const Account = () => {
  return (
    <div>
      <div>
        <KegList employee={true}/>
      </div>
    </div>
  );
};

export default Account;