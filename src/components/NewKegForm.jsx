import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {Redirect} from 'react-router-dom';
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
  marginTop: '1px',
  textAlign: 'center',
  letterSpacing: '5px',
  color: 'white',
  // paddingLeft: '20px',
  paddingTop: '20px',
};

class NewKegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };

    this._style = null;
    this._brand = null;
    this._alcoholVolume = null;
    this._price = null;
    this.handleNewKegFormSubmission = this.handleNewKegFormSubmission.bind(this);
  }

  handleNewKegFormSubmission(event) {
    event.preventDefault();
    this.props.onNewKegCreation({style: this._style.value, brand: this._brand.value, alcoholVolume: this._alcoholVolume.value, price: this._price.value, timeOpen: new Moment()});
    this._style.value = '';
    this._brand.value = '';
    this._alcoholVolume.value = '';
    this._price.value = '';
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/kegList"/>;
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
        <form onSubmit={this.handleNewKegFormSubmission}>
          <select ref={(input) => {this._style = input;}} style={{width: '200px', height: '40px', color: 'black', backgroundColor: 'white', borderRadius: '5px'}}>
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
            ref={(input) => {this._brand = input;}}/>
          <br/><br/>
          <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
            type='number'
            id='alcoholVolume'
            placeholder='Alcohol Volume'
            ref={(input) => {this._alcoholVolume = input;}}/>
          <br/><br/>
          <input style={{borderRadius: '5px', border: 'none', width: '200px', padding: '10px'}}
            type='number'
            id='price'
            placeholder='Price'
            ref={(input) => {this._price = input;}}/>
          <br/><br/>
          <button type='submit' className="btn btn-dark">Submit</button>

        
        </form>
        <br />
        <hr />
        <Link to="/kegList" style={{ color: 'orange'}}>Keg List</Link>
      </div>
    );
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;