import React from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit';
import {Button, Checkbox} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pints: 124,
      edit: false
    };
  }

  render() {
    return (
      <div>
        <p style={{color: 'grey'}}>Style</p> <h2>{this.props.style}</h2>
        <p style={{color: 'grey'}}>Brand</p><h2>{this.props.brand}</h2>
        <p style={{color: 'grey'}}>Alcohol per volume</p><h2>{this.props.alcoholVolume}%</h2>
        <p style={{color: 'grey'}}>Price per glass</p><h2>${this.props.price}</h2>
        {/* <p><em>{props.formattedWaitTime}</em></p> */}
        
        

        {this.props.employee ? 
          
          <div>
          <br/>
            <Button onClick={() => this.setState({pints: this.state.pints-1})
            }>Sell a Pint</Button><br/>
            <h5>Pints Left: {this.state.pints <= 0 ? 0 : this.state.pints}</h5>

            <Checkbox onChange={() => this.setState({edit: !this.state.edit})}>Edit info</Checkbox>
            {this.state.edit ? <Edit name={this.props.style} brand={this.props.brand} alcoholVolume={this.props.alcoholVolume} price={this.props.price}/> : null}
          </div>
          : null}
        <hr/>
      </div>
    );
  }
}

Keg.propTypes = {
  style: PropTypes.string.isrequired,
  brand: PropTypes.string.isrEQUIRED,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  employee: PropTypes.bool
};

export default Keg;