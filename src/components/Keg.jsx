import React from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit';
import {Button, Checkbox} from 'react-bootstrap';

class Keg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pints: 124,
      edit: false,
    };
  }

  render() {
    return (
      <div >
        <p style={{color: 'lightgrey'}}>Style</p> <h2>{this.props.style}</h2><br/>
        <p style={{color: 'lightgrey'}}>Brand</p><h2>{this.props.brand}</h2><br/>
        <p style={{color: 'lightgrey'}}>Alcohol per volume</p><h2>{this.props.alcoholVolume}%</h2><br/>
        <p style={{color: 'lightgrey'}}>Price per glass</p><h2>${this.props.price}</h2><br/>
        <p style={{color: 'lightgrey'}}><em>{this.props.formattedWaitTime}</em></p>
        
        {this.props.employee ? 
         
          <div >
            
            <Button className="buttonStyle" style={{ color: 'orange', backgroundColor: 'transparent', border: '1px solid grey'}} onClick={() => this.setState({pints: this.state.pints-1})
            }></Button><br/><br/>Pints Left: {this.state.pints <= 0 ? 0 : this.state.pints}
            <style jsx global>{`
              .buttonStyle {
                font-size: 20px;
                text-decoration: none;
              }
              .buttonStyle:focus {
                outline: none;
              }
              .buttonStyle:after {
                content: 'Pint Refill';
              }
              .buttonStyle:hover:after {
                color: orange;
                content: 'One pint sold? Click here to refill tap.';
              }
            `}</style>
            <br/><br/>
             
            <Checkbox onChange={() => this.setState({edit: !this.state.edit})}>Edit info</Checkbox>
            {this.state.edit ?
              <Edit 
                onEditKeg={this.props.onEditKeg}
                style={this.props.style}
                brand={this.props.brand}
                alcoholVolume={this.props.alcoholVolume}
                price={this.props.price}
                id={this.props.id}/> : null}

          </div>
          : null}
        <hr/>
      </div>
    );
  }
}

Keg.propTypes = {
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  id: PropTypes.string,
  employee: PropTypes.bool,
  onEditKeg: PropTypes.func
};

export default Keg;