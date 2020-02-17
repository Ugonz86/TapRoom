import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Form, FormGroup, ControlLabel, FormControl, Button, CheckBox } from 'react-bootstrap';

const Edit = (props => {
  const editStyle = {

  };
  return (
    <div>
      <div className="text-box">
        <h1>Edit Keg</h1>
        <Form>
          <FormGroup>
            <ControlLabel>Style</ControlLabel>
            <FormControl type="text" placeholder={props.style} defaultValue={props.style}></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Brand</ControlLabel>
            <FormControl type="text" placeholder={props.brand} defaultValue={props.brand}></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Alcohol Volume</ControlLabel>
            <FormControl type="text" placeholder={props.alcoholVolume} defaultValue={props.alcoholVolume}></FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <FormControl type="text" placeholder={props.price} defaultValue={props.price}></FormControl>
          </FormGroup>

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