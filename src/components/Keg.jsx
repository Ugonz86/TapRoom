import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Edit from './Edit';
// import {Button, Checkbox } from 'react-bootstrap';

// var kegStyle = {
//   // color: 'green'
// }

//creating class the same way I did on NewKegControl. Testing functionality. Subject to change.
// class Keg extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pints: 124,
//       editDisplay: false
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p style={{color: 'grey'}}>Style</p> <h2>{this.props.style}</h2>
//         <p style={{color: 'grey'}}>Brand</p><h2>{this.props.brand}</h2>
//         <p style={{color: 'grey'}}>Alcohol per volume</p><h2>{this.props.alcoholVolume}%</h2>
//         <p style={{color: 'grey'}}>Price per glass</p><h2>${this.props.price}</h2>
//         <p><em>{this.props.formattedWaitTime}</em></p>
//         {/* {props.employee ? <Link to="/edit" style={{ color: 'orange'}}>Edit Keg</Link> : null} */}
        
//         <br />
//         <br />
//         <hr/>

        // {this.props.employee ?
        //   <div>
        //     <p>Pints Left: {this.state.pints <= 0 ? 0 : this.state.pints}</p>
            
        //     <Button onClick={() => this.setState({pints: this.state.pints-1})
        //     }>Sold One Pint</Button>
            
        //     <Checkbox onChange={() => this.setState({editDisplay: !this.state.editDisplay})}>Edit</Checkbox>
        //     {this.state.editDisplay ? <Edit style={this.props.style} brand={this.props.brand} alcoholVolume={this.props.alcoholVolume} price={this.props.price}/> :null}
        //     {/* <Link to="/edit" style={{ color: 'orange'}}>Edit Keg</Link> */}
          
        //   </div>
        //   : null}

//       </div>
//     );
//   }
// }
var kegListHeader = {
  // display: 'inlineFlex',
  // textAlign: 'center',
  // wordSpacing: '270px'
};

function Keg(props){
  const kegInformation =
    <div>
      <div style={kegListHeader}>
        Style <h1>{props.style}</h1>
        Brand <h2>{props.brand}</h2>
        Alcohol per volume<h3>{props.alcoholVolume}</h3>
        Price per keg<h3>{props.price}</h3>
        <p>{props.formattedWaitTime}</p>
        {/* {props.employee ? <Link to="/edit" style={{ color: 'orange'}}>Edit Keg</Link> : null} */}
        <br />
        
        <hr/>
      </div>
        
    </div>;
  
  if (props.currentRouterPath === '/employee'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInformation}
        <Link to="/edit" style={{ color: 'orange'}}>Edit Keg</Link>
      </div>
    );
  } else {
    return (
      <div>
        {/* <div style={kegListHeader}>
        <h2>Style</h2>
        <h2>Brand</h2>
        <h2>Alcohol-Vol</h2>
        <h2>Price</h2>
      </div> */}
        {kegInformation}
        
      </div>
    );
  }
}

Keg.propTypes = {
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired,
  employee: PropTypes.bool
};

export default Keg;