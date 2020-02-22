import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
// import beer from '../assets/images/beer.jpg';

// var picBoxStyle = {
//   backgroundColor: 'transparent', 
//   height: '300px',
// };

var patronStyle = {
  textAlign: 'center',
  letterSpacing: '5px',
  color: 'black',
  // paddingLeft: '20px',
  paddingTop: '15px', 
};

function Patron(props){

  let optionalSelectedKegContent = null;
 
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <KegList selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
      
    <div>
    {/* <div className="introBox" style={picBoxStyle}>
         <style jsx global>{`
           .introBox {
             background: url(${beer}) no-repeat center center;
            background-size: cover;
            }
         `}</style>
       </div> */}
      <div>
        <h1 style={patronStyle}>Welcome to The Tap Room!</h1>
        <br/>
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
// function Patron(){
//   return (
//     <div>
//       <div className="introBox" style={picBoxStyle}>
//         <style jsx global>{`
//           .introBox {
//             background: url(${beer}) no-repeat center center;
//             background-size: cover;
//           }
//         `}</style>
//       </div>
//       <div style={patronStyle}>
//         <h1>Welcome to The Tap Room!</h1>
      
//         <Link to="/kegList" >Keg List</Link>
//         <style jsx global>{`
//         a:hover {
//           color: "yellow";
//         }
//       `}</style>
//       </div>
//     </div>
   
//   );
// }

Patron.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Patron;