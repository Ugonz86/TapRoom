import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Edit from './Edit';
import {Button, Checkbox } from 'react-bootstrap';

//creating class the same way I did on NewKegControl. Testing functionality. Subject to change.
class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegs: 124,
      editDisplay: false
    };
  }

  render() {
    return (
      <div>
        <h1>Style {this.props.style}</h1>
        <h2>Brand  {this.props.brand}</h2>
        <h3> Alcohol per volume {this.props.alcoholVolume}</h3>
        <h3> Price per keg {this.props.price}</h3>
        <p>Added {this.props.formattedWaitTime} ago</p>
        <br />
        <hr/>

        {this.props.admin ?
          <div>
            <p>Keg Inventory: {this.state.kegs <= 0 ? 0 : this.state.kegs}</p>
            
            <Button onClick={() => this.setState({kegs: this.state.kegs-1})
            }>Sold One Keg</Button>
            
            <Checkbox onChange={() => this.setState({editDisplay: !this.state.editDidplay})}>Edit</Checkbox>
            {this.state.editDisplay ? <Edit style={this.props.style} brand={this.props.brand} alcoholVolume={this.props.alcoholVolume} price={this.props.price}/> :null}
          
          </div>
          : null}

      </div>
    );
  }
}
// var kegListHeader = {
//   display: 'inlineFlex',
//   // textAlign: 'center',
//   // wordSpacing: '270px'
// };
// function Keg(props){
//   const kegInformation =
//     <div>
//       <div style={kegListHeader}>
//         Style <h1>{props.style}</h1>
//         Brand <h2>{props.brand}</h2>
//         Alcohol per volume<h3>{props.alcoholVolume}</h3>
//         Price per keg<h3>{props.price}</h3>
//         <p>Added {props.formattedWaitTime} ago</p>
//         <br />
//         <hr/>
//       </div>
        
//     </div>;
//   if (props.currentRouterPath === '/admin'){
//     return (
//       <div onClick={() => {props.onKegSelection(props.kegId);}}>
//         {kegInformation}
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         {/* <div style={kegListHeader}>
//         <h2>Style</h2>
//         <h2>Brand</h2>
//         <h2>Alcohol-Vol</h2>
//         <h2>Price</h2>
//       </div> */}
//         {kegInformation}
//       </div>
//     );
//   }
// }

Keg.propTypes = {
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired,
  admin: PropTypes.bool
};

export default Keg;