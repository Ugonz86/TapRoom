import React from 'react';
import { Link } from 'react-router-dom';
// import NewKegForm from './NewKegForm';
// import KegList from './KegList';
// import Keg from './Keg';
import beer6 from '../assets/images/beer6.jpg';

var employeeStyle = {
  textAlign: 'center',
  fontSize: '20px',
  letterSpacing: '5px',
  color: 'white',
  backgroundColor: 'black',
  paddingLeft: '20px',
  paddingBottom: '30px',
  paddingTop: '20px', 
}; 

var picBoxStyle = {
  backgroundColor: 'transparent', 
  height: '300px',
};

// function EmployeeAdmin(props){
//   let optionalSelectedKegContent = null;
//   if (props.selectedKeg != null){
//     optionalSelectedKegContent =  <KegDetail selectedKeg={props.kegList[props.selectedKeg]}/>;
//   }
//   return (
//     <div>
//       <h2>Employee</h2>
//       {optionalSelectedKegContent}
//       <KegList employee={true}
//         kegList={props.kegList}
//         currentRouterPath={props.currentRouterPath}
//         onKegSelection={props.onKegSelection}/>
//     </div>
//   );
// }

// EmployeeAdmin.propTypes = {
//   kegList: PropTypes.array,
//   currentRouterPath: PropTypes.string.isRequired,
//   onKegSelection: PropTypes.func.isRequired,
//   selectedKeg: PropTypes.string
// };

function Employee(){
  return (
    <div>
      <div className="introBox" style={picBoxStyle}>
        <style jsx global>{`
          .introBox {
            background: url(${beer6}) no-repeat center center;
            background-size: cover;
          }
        `}</style>
      </div>
      <div style={employeeStyle}>
        <h1>Hello Employee!</h1>
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

export default Employee;
// export default EmployeeAdmin;