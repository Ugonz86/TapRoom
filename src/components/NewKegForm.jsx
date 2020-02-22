import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { Link } from 'react-router-dom';


var formStyle = {
  color: 'black',
  backgroundColor: 'black',
  // paddingLeft: '20px',
  paddingBottom: '30px',
  // marginBottom: '60px',
  textAlign: 'center',
};

var salute = {
  marginTop: '1',
  textAlign: 'center',
  letterSpacing: '5px',
  color: 'white',
  // paddingLeft: '20px',
  paddingTop: '20px',
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
      <h1 style={salute}>Add New Keg</h1><br/>
      
      {/* <Form onSubmit={handleNewKegFormSubmission}>
      
        <FormGroup>
          <ControlLabel>Style</ControlLabel>
          <FormControl ref={(input) => {_style = input;}}>
            <option value="Ale">Ale</option>
            <option value="Lager">Lager</option>
            <option selected value="Stout">Stout</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Specialty">Specialty</option>
          </FormControl>
        </FormGroup>
        <br />

        <FormGroup>
          <ControlLabel>Brand</ControlLabel>
          <FormControl type='text' id='brand' placeholder='Brand' ref={(input) => {_brand = input;}}></FormControl>
        </FormGroup>
        <br />

        <FormGroup>
          <ControlLabel>Alcohol Volume</ControlLabel>
          <FormControl type='number' id='alcoholVolume' placeholder='Alcohol Volume' ref={(input) => {_alcoholVolume = input;}}></FormControl>
        </FormGroup>
        <br />

        <FormGroup>
          <ControlLabel>Price</ControlLabel>
          <FormControl type='number' id='price' placeholder='Price' ref={(input) => {_price = input;}}></FormControl>
        </FormGroup>
        <br />
       
        <Button type="submit" >Submit</Button>

      </Form>  */}
      <form onSubmit={handleNewKegFormSubmission}>

        <select ref={(input) => {_style = input;}} style={{width: '200px', height: '40px', color: 'black', backgroundColor: 'white', borderRadius: '5px'}}>
          <option value="Ale">Ale</option>
          <option value="Lager">Lager</option>
          <option selected value="Stout">Stout</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Specialty">Specialty</option>
        </select>
        <br/><br/>
        <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <br/><br/>
        <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
          type='number'
          id='alcoholVolume'
          placeholder='Alcohol Volume'
          ref={(input) => {_alcoholVolume = input;}}/>
        <br/><br/>
        <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
          type='number'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <br/><br/>
        <button type='submit' className="btn btn-dark">Submit</button>

        
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