import React from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit';
import {Button, Checkbox} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pints: 124,
      showEdit: false
    };
  }

  render() {
    return (
      <div>
        <p style={{color: 'grey'}}>Style</p> <h2>{this.props.style}</h2>
        <p style={{color: 'grey'}}>Brand</p><h2>{this.props.brand}</h2>
        <p style={{color: 'grey'}}>Alcohol per volume</p><h2>{this.props.alcoholVolume}%</h2>
        <p style={{color: 'grey'}}>Price per glass</p><h2>${this.props.price}</h2>
        {/* <p><em>{props.formattedWaitTime}</em></p> */}
        <hr/>

        {this.props.employee ?
        
          <div>
            pints left: {this.state.pints <= 0 ? 0 : this.state.pints}

            <Button onClick={() => this.setState({pints: this.state.pints-1})
            }>Sold One pint</Button><br/>

            <Checkbox onChange={() => this.setState({showEdit: !this.state.showEdit})}>Edit info</Checkbox>
            {this.state.showEdit ? <Edit name={this.props.style} brand={this.props.brand} alcoholVolume={this.props.alcoholVolume} price={this.props.price}/> : null}
          </div>
          : null}
      </div>
    );
  }
}

Keg.propTypes = {
  style: PropTypes.string.isrequired,
  brand: PropTypes.string.isrEQUIRED,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  employee: PropTypes.bool
};

export default Keg;
// function Keg(props){
//   const kegInformation =
//     <div>
//       <div>
//         <p style={{color: 'grey'}}>Style</p> <h2>{this.props.style}</h2>
//         <p style={{color: 'grey'}}>Brand</p><h2>{this.props.brand}</h2>
//         <p style={{color: 'grey'}}>Alcohol per volume</p><h2>{this.props.alcoholVolume}%</h2>
//         <p style={{color: 'grey'}}>Price per glass</p><h2>${this.props.price}</h2>
//         <p><em>{props.formattedWaitTime}</em></p>
//         <Edit style={this.props.style} brand={this.props.brand} alcoholVolume={this.props.alcoholVolume} price={this.props.price}/>
//         {/* <Link to="/edit" style={{ color: 'orange'}}>Edit Keg</Link> */}
//         <br />
        
//         <hr/>
//       </div>
        
//     </div>;
  
//   if (props.currentRouterPath === '/employee'){
//     return (
//       <div onClick={() => {props.onKegSelection(props.kegId);}}>
//         {kegInformation}
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         {kegInformation}
//       </div>
//     );
//   }
// }

// Keg.propTypes = {
//   style: PropTypes.string.isRequired,
//   brand: PropTypes.string.isRequired,
//   alcoholVolume: PropTypes.number.isRequired,
//   price: PropTypes.number.isRequired,
//   formattedWaitTime: PropTypes.string.isRequired,
//   currentRouterPath: PropTypes.string,
//   onKegSelection: PropTypes.func,
//   kegId: PropTypes.string.isRequired,
// };

// export default Keg;