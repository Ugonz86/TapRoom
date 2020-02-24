import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Employee(props){
 
  let optionalSelectedKegContent = null;
 
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <KegList selectedKeg={props.kegList[props.selectedKeg]} employee={true}/>;
  }

  return (
      
    <div>
      <div>
        {optionalSelectedKegContent}
        <KegList
          kegList={props.kegList}
          currentRouterPath={props.currentRouterPath}
          onKegSelection={props.onKegSelection}
          employee={true}
          onEditKeg={props.onEditKeg}
        />
      </div>
    </div>
  );
}

Employee.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func,
  selectedKeg: PropTypes.string,
  onEditKeg: PropTypes.func
};

export default Employee;
