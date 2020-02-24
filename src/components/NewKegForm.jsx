import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';


var formStyle = {
  color: 'grey',

  paddingBottom: '30px',
  textAlign: 'center',
};

var salute = {
  marginTop: '1px',
  textAlign: 'center',
  letterSpacing: '5px',
  color: 'grey',
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
        <br/>
        <h1 style={salute}>Add New Keg</h1><br/>
        <form onSubmit={this.handleNewKegFormSubmission}>
          <select ref={(input) => {this._style = input;}} style={{width: '200px', outline: 'none', height: '40px', color: 'black', backgroundColor: 'white', borderRadius: '5px'}}>
            <option value="Ale">Ale</option>
            <option value="Lager">Lager</option>
            <option selected value="Stout">Stout</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Specialty">Specialty</option>
          </select>
          <br/><br/>
          <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
            type='text'
            id='brand'
            placeholder='Brand'
            ref={(input) => {this._brand = input;}}/>
          <br/><br/>
          <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
            type='number'
            id='alcoholVolume'
            placeholder='Alcohol Volume'
            ref={(input) => {this._alcoholVolume = input;}}/>
          <br/><br/>
          <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
            type='number'
            id='price'
            placeholder='Price'
            ref={(input) => {this._price = input;}}/>
          <br/><br/>
          <button type='submit' className="button3">Submit</button>
          <style jsx global>{`
              .button3 {
                border-radius: 5px;
                color: grey;
                border: none;
                font-size: 25px;
              }
              .button3:hover {
                
                color: orange;
                border: none;
              }
              .button3:focus {
                
                outline: none;
              }
            `}</style>
        </form>
        <hr />
        <Link to="/kegList" className="button3" >Keg List</Link>
      </div>
    );
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;