import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
import {FormGroup, ControlLabel, Button } from 'react-bootstrap';

// import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';


const Edit = (props => {
  const editStyle = {
    color: 'white',
    backgroundColor: 'black',
    paddingLeft: '20px',
    // paddingBottom: '30px',
    // marginBottom: '30px',
  };

  const form = {
    width: '400px',
    marginLeft: '20px'
  };

  let _style = null;
  let _brand = null;
  let _alcoholVolume = null;
  let _price = null;

  function handleEditKeg(event) {
    event.preventDefault();
    
    props.onEditKeg({style: _style.value, brand: _brand.value, alcoholVolume: parseFloat(_alcoholVolume.value), price: parseFloat(_price.value), id: props.id});
    alert('Updated!');
    _style.value = '';
    _brand.value = '';
    _alcoholVolume.value = '';
    _price.value = '';
  }

  return (
    <div style={editStyle}>
      <div className="text-box">
        <h1>Edit Keg</h1>
        <form onSubmit={handleEditKeg} style={form}>
      
          <FormGroup>
            <ControlLabel>Style</ControlLabel>
            <input className="form-control" type="text" placeholder={props.style} defaultValue={props.style} id="style" ref={(input) => {_style = input;}}/>
          </FormGroup>
          <br />

          <FormGroup>
            <ControlLabel>Brand</ControlLabel>
            <input className="form-control" type="text" placeholder={props.brand} defaultValue={props.brand} id="brand" ref={(input) => {_brand = input;}}/>
          </FormGroup>
          <br />

          <FormGroup>
            <ControlLabel>Alcohol Volume</ControlLabel>
            <input className="form-control" type="number" step="0.01" placeholder={props.alcoholVolume} defaultValue={props.alcoholVolume} id="alcoholVolume" ref={(input) => {_alcoholVolume = input;}}/>
          </FormGroup>
          <br />

          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <input className="form-control" type="number" step="0.01" placeholder={props.price} defaultValue={props.price} id="price" ref={(input) => {_price = input;}}/>
          </FormGroup>
          <br />
       
          <Button type="submit" variant="secondary">Submit</Button>

        </form> 
      </div>
    </div>
  );
});

Edit.propTypes = {
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  onEditKeg: PropTypes.func
};

export default Edit;