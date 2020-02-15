import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _style = null;
  let _brand = null;
  let _alcoholVolume = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({style: _style.value, brand: _brand.value, alcoholVolume: _alcoholVolume.value, price: _price.value, id: v4()});
    _style.value = '';
    _brand.value = '';
    _alcoholVolume.value = '';
    _price.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='style'
          placeholder='Style'
          ref={(input) => {_style = input;}}/>
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