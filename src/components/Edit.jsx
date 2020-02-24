// import React from 'react';
// // import {Link} from 'react-router-dom';
// import {FormGroup, ControlLabel, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// // import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';


// const Edit = (props) => {

//   let _style = null;
//   let _brand = null;
//   let _alcoholVolume = null;
//   let _price = null;

//   var editStyle = {
//     color: 'white',
//     backgroundColor: 'black',
//     paddingLeft: '20px',
//     // paddingBottom: '30px',
//     // marginBottom: '30px',
//   };

//   var form = {
//     width: '400px',
//     marginLeft: '20px'
//   };

//   handleEditKeg(event) {
//     event.preventDefault();
//     // {Object.keys(props.kegList).map(function(kegId){
//     //   var keg = props.kegList[kegId];
//     //   console.log(keg);
//     // })}
//     const o1 = {id:1, price: 3};
//     const o2 = {id:2, price: 5};
//     const o3 = Object.assign({}, o1, o2, {id:3, price:6});
//     console.log(o3);
//     props.onEditKeg({style: _style.value, brand: _brand.value, alcoholVolume: parseFloat(_alcoholVolume.value), price: parseFloat(_price.value), id: props.id});
//     // alert(_price.value + ' ' + props.id);
    
//     alert('Updated!');
//     _style.value = '';
//     _brand.value = '';
//     _alcoholVolume.value = '';
//     _price.value = '';
//     // this.setState({redirect: true});
//   }

//   return (
//     <div style={editStyle}>
//       <div className="text-box">
//         <h1>Edit Keg</h1>
//         <form onSubmit={this.handleEditKeg} style={form}>
      
//           <FormGroup>
//             <ControlLabel>Style</ControlLabel>
//             <input className="form-control" type="text" placeholder={props.style} defaultValue={props.style} id="style" ref={(input) => {_style = input;}}/>
//           </FormGroup>
//           <br />

//           <FormGroup>
//             <ControlLabel>Brand</ControlLabel>
//             <input className="form-control" type="text" placeholder={props.brand} defaultValue={props.brand} id="brand" ref={(input) => {_brand = input;}}/>
//           </FormGroup>
//           <br />

//           <FormGroup>
//             <ControlLabel>Alcohol Volume</ControlLabel>
//             <input className="form-control" type="number" step="0.01" placeholder={props.alcoholVolume} defaultValue={props.alcoholVolume} id="alcoholVolume" ref={(input) => {_alcoholVolume = input;}}/>
//           </FormGroup>
//           <br />

//           <FormGroup>
//             <ControlLabel>Price</ControlLabel>
//             <input className="form-control" type="number" step="0.01" placeholder={props.price} defaultValue={props.price} id="price" ref={(input) => {_price = input;}}/>
//           </FormGroup>
//           <br />
       
//           <Button type="submit">Submit</Button>

//         </form> 
//       </div>
//     </div>
//   );
// };

// Edit.propTypes = {
//   kegList: PropTypes.object,
//   style: PropTypes.string.isRequired,
//   brand: PropTypes.string.isRequired,
//   alcoholVolume: PropTypes.number.isRequired,
//   price: PropTypes.number.isRequired,
//   id: PropTypes.string,
//   onEditKeg: PropTypes.func
// };

// export default Edit;

import React from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

// import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

var editStyle = {
  color: 'white',
  backgroundColor: 'black',
  paddingLeft: '20px',
  // paddingBottom: '30px',
  // marginBottom: '30px',
};

var form = {
  width: '400px',
  marginLeft: '20px',
  color: 'black'
};

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this._style = null;
    this._brand = null;
    this._alcoholVolume = null;
    this._price = null;
    this.handleEditKeg = this.handleEditKeg.bind(this);
  }

  handleEditKeg(event) {
    event.preventDefault();
    
    this.props.onEditKeg({style: this._style.value, brand: this._brand.value, alcoholVolume: parseFloat(this._alcoholVolume.value), price: parseFloat(this._price.value), id: this.props.id});
    
    alert('This Keg has been updated!');
    this._style.value = '';
    this._brand.value = '';
    this._alcoholVolume.value = '';
    this._price.value = '';
  }

  render () {
    return (
      <div style={editStyle}>
        <div className="text-box">
          <h1>Edit Keg</h1>
          <form onSubmit={this.handleEditKeg} style={form}>

            <select defaultValue={this.style} id="style" ref={(input) => {this._style = input;}} style={{width: '200px', height: '40px', color: 'black', backgroundColor: 'white', borderRadius: '5px'}}>
              <option value="Ale">Ale</option>
              <option value="Lager">Lager</option>
              <option selected value="Stout">Stout</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Specialty">Specialty</option>
            </select>
            {/* <FormGroup>
              <ControlLabel>Style</ControlLabel>
              <input className="form-control" type="text" placeholder={this.props.style} defaultValue={this.props.style} id="style" ref={(input) => {this._style = input;}}/>
            </FormGroup> */}
            <br/><br/>
            <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
              type="text" defaultValue={this.brand} id="brand"
              ref={(input) => {this._brand = input;}}/>
            <br/><br/>
            <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
              type="number" step="0.01"  defaultValue={this.alcoholVolume} id="alcoholVolume"
              ref={(input) => {this._alcoholVolume = input;}}/>
            <br/><br/>
            <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
              type="number" step="0.01" defaultValue={this.price} id="price"
              ref={(input) => {this._price = input;}}/>         
            <br/><br/>
            <Button type='submit'>Submit</Button>
          </form> 
        </div>
      </div>
    );
  }

}
// const Edit = (props) => {

//   let _style = null;
//   let _brand = null;
//   let _alcoholVolume = null;
//   let _price = null;

//   var editStyle = {
//     color: 'white',
//     backgroundColor: 'black',
//     paddingLeft: '20px',
//     // paddingBottom: '30px',
//     // marginBottom: '30px',
//   };

//   var form = {
//     width: '400px',
//     marginLeft: '20px'
//   };


// };

Edit.propTypes = {
  kegList: PropTypes.object,
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  onEditKeg: PropTypes.func
};

export default Edit;