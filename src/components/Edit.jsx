import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

var editStyle = {
  color: 'grey',
  paddingLeft: '20px',
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

            <select defaultValue={this.style} id="style" ref={(input) => {this._style = input;}} style={{width: '200px', outline: 'none', border: '1px solid grey', height: '40px', color: 'black', backgroundColor: 'white', borderRadius: '5px'}}>
              <option value="Ale">Ale</option>
              <option value="Lager">Lager</option>
              <option selected value="Stout">Stout</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Specialty">Specialty</option>
            </select>
            <br/><br/>
            <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
              type="text" placeholder="Brand" defaultValue={this.brand} id="brand"
              ref={(input) => {this._brand = input;}}/>
            <br/><br/>
            <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
              type="number" step="0.01"  placeholder="Alcohol Volume" defaultValue={this.alcoholVolume} id="alcoholVolume"
              ref={(input) => {this._alcoholVolume = input;}}/>
            <br/><br/>
            <input style={{borderRadius: '5px', outline: 'none', border: '1px solid grey', width: '200px', padding: '10px'}}
              type="number" step="0.01" placeholder="Price" defaultValue={this.price} id="price"
              ref={(input) => {this._price = input;}}/>         
            <br/><br/>
            <Button className="button3" type='submit'>Submit</Button>
            <style jsx global>{`
              .button3 {
                border-radius: 5px;
                color: grey;
                border: none;
                font-size: 20px;
              }
              .button3:hover {
                background-color: transparent;
                color: orange;
                border: none;
              }
              .button3:focus {
                
                outline: none;
              }
            `}</style>
          </form> 
        </div>
      </div>
    );
  }
}

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