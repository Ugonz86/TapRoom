// import React from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import KegList from './KegList';
// import KegDetail from './KegDetail';


// function Admin(props){
//   let optionalSelectedKegContent = null;
//   if (props.selectedKeg != null){
//     optionalSelectedKegContent =  <KegDetail selectedKeg={props.kegList[props.selectedKeg]}/>;
//   }
//   return (
//     <div>
//       <h2>Admin</h2>
//       {optionalSelectedKegContent}
//       <KegList Admin={true}
//         kegList={props.kegList}
//         currentRouterPath={props.currentRouterPath}
//         onKegSelection={props.onKegSelection}/>
//     </div>
//   );
// }

// Admin.propTypes = {
//   kegList: PropTypes.array,
//   currentRouterPath: PropTypes.string.isRequired,
//   onKegSelection: PropTypes.func.isRequired,
//   selectedKeg: PropTypes.string
// };

// export default Admin;