import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
// import {select } from 'react-bootstrap';

// var styleList = [
//   {
//     style: 'ale', 'lager'
//   }
// ]
function NewKegForm(props){
  let _style = null;
  let _brand = null;
  let _alcoholVolume = null;
  let _price = null;

  // var styles = ['Sydney', 'Melbourne', 'Brisbane', 
  //   'Adelaide', 'Perth', 'Hobart'];

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({style: _style.value, brand: _brand.value, alcoholVolume: _alcoholVolume.value, price: _price.value, timeOpen: new Moment()});
    _style.value = '';
    _brand.value = '';
    _alcoholVolume.value = '';
    _price.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        {/* <input
          type='text'
          id='style'
          placeholder='Style'
          ref={(input) => {_style = input;}}/> */}

        <select ref={(input) => {_style = input;}}>
          <option value="ale">Ale</option>
          <option value="lager">Lager</option>
          <option selected value="stout">Stout</option>
          <option value="hybrid">Hybrid</option>
          <option value="specialty">Specialty</option>
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
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;