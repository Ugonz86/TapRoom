import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='style'
          placeholder='Style'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='alcoholVolume'
          placeholder='Alcohol Volume'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewKegForm;