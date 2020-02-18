import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

// var editStyle = {
  
// }
const Edit = (props => {
  const editStyle = {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.69)',
    paddingLeft: '20px',
    paddingBottom: '30px',
    marginBottom: '60px'
  };
  return (
    <div style={editStyle}>
      <div className="text-box">
        <h1>Edit Keg</h1>
        <Form>
          {/* <FormGroup>
            <ControlLabel>Style</ControlLabel>
            <FormControl type="input" placeholder={props.style} defaultValue={props.style}>
              <option value="Ale">Ale</option>
              <option value="Lager">Lager</option>
              <option selected value="Stout">Stout</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Specialty">Specialty</option>
            </FormControl>
          </FormGroup> */}
          <FormGroup>
            <ControlLabel>Style</ControlLabel>
            <FormControl type="text" placeholder={props.style} defaultValue={props.style}></FormControl>
          </FormGroup>
          <br />

          <FormGroup>
            <ControlLabel>Brand</ControlLabel>
            <FormControl type="text" placeholder={props.brand} defaultValue={props.brand}></FormControl>
          </FormGroup>
          <br />

          <FormGroup>
            <ControlLabel>Alcohol Volume</ControlLabel>
            <FormControl type="text" placeholder={props.alcoholVolume} defaultValue={props.alcoholVolume}></FormControl>
          </FormGroup>
          <br />

          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <FormControl type="text" placeholder={props.price} defaultValue={props.price}></FormControl>
          </FormGroup>
          <br />

          <Button type="submit" className="btn btn-primary">Submit</Button>
        </Form>

      </div>
    </div>
  );
});

Edit.propTypes = {
  style: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholVolume: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Edit;