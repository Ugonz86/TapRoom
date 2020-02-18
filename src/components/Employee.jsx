import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import Keg from './Keg';
// import KegDetail from './KegDetail';
import beer6 from '../assets/images/beer6.jpg';

var employeeStyle = {
  textAlign: 'center',
  // fontSize: '20px',
  letterSpacing: '5px',
  color: 'black',
  
  paddingLeft: '20px',
  // paddingBottom: '20px',
  paddingTop: '20px', 
  
}; 

// var picBoxStyle = {
//   backgroundColor: 'transparent', 
//   height: '300px',
// };

function Employee(props){
  let optionalSelectedKegContent = null;
      <div>
       <KegList employee={true}/>
       <Keg employee={true}/>
     </div>
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <KegList selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  
    return (
    <div>
      {/* <div className="introBox" style={picBoxStyle}>
        <style jsx global>{`
          .introBox {
            background: url(${beer6}) no-repeat center center;
            background-size: cover;
          }
        `}</style>
      </div> */}
      <div>
        <h1 style={employeeStyle}>Hello Employee!</h1>
      <br/>
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection}/>
        <Link to="/newKeg">Add New Keg</Link> <br /><br /> <Link to="/kegList">Keg List</Link>
        <style jsx global>{`
        a:hover {
          color: "yellow";
        }
      `}</style>
      </div>

    </div>
  );
}

Employee.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string,
  employee: PropTypes.bool
};

export default Employee;
