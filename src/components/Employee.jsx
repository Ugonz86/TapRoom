import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

var employeeStyle = {
  textAlign: 'center',
  letterSpacing: '5px',
  color: 'black',
  paddingLeft: '20px',
  paddingTop: '20px', 
  
}; 

function Employee(props){

  let optionalSelectedKegContent = null;
 
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <KegList selectedKeg={props.kegList[props.selectedKeg]}/>;
  }

  return (
      
    <div>
      <div>
        <h1 style={employeeStyle}>Hello Employee!</h1>
        <br/>
        {optionalSelectedKegContent}
        <KegList
          kegList={props.kegList}
          currentRouterPath={props.currentRouterPath}
          onKegSelection={props.onKegSelection}/>
      </div>
    </div>
  );
}

Employee.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string,
};

export default Employee;
