import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';

function Patron(props){

  let optionalSelectedKegContent = null;
 
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <KegList selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
      
    <div>
      <div>
        {optionalSelectedKegContent}
        <KegList
          kegList={props.kegList}
          currentRouterPath={props.currentRouterPath}
          onKegSelection={props.onKegSelection}
        />
      </div>
    </div>
  );
}

Patron.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Patron;