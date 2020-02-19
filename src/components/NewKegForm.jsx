import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { Link } from 'react-router-dom';

var formStyle = {
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.69)',
  paddingLeft: '20px',
  paddingBottom: '30px',
  marginBottom: '60px'
};

function NewKegForm(props){
  let _style = null;
  let _brand = null;
  let _alcoholVolume = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({style: _style.value, brand: _brand.value, alcoholVolume: _alcoholVolume.value, price: _price.value, timeOpen: new Moment()});
    _style.value = '';
    _brand.value = '';
    _alcoholVolume.value = '';
    _price.value = '';
  }

  return (
    <div style={formStyle}>
      <br />
      <form onSubmit={handleNewKegFormSubmission}>

        <select ref={(input) => {_style = input;}}>
          <option value="Ale">Ale</option>
          <option value="Lager">Lager</option>
          <option selected value="Stout">Stout</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Specialty">Specialty</option>
        </select>

        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <input
          type='text'
          id='alcoholVolume'
          placeholder='Alcohol Volume'
          ref={(input) => {_alcoholVolume = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        
        <button type='submit'>Submit</button>

      </form>
      <br />
      <hr />
      <Link to="/kegList" style={{ color: 'orange'}}>Keg List</Link>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;