import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>You are about to add a new Keg to the inventory. Continue?</p>
      <button onClick={props.onNewKegConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onNewKegConfirmation: PropTypes.func
};

export default ConfirmationQuestions;