import React from 'react';
import { Link } from 'react-router-dom';
import beer from '../assets/images/beer.jpg';

var picBoxStyle = {
  backgroundColor: 'transparent', 
  height: '300px',
};

var patronStyle = {
  textAlign: 'center',
  fontSize: '20px',
  letterSpacing: '5px',
  color: 'white',
  backgroundColor: 'black',
  paddingLeft: '20px',
  paddingBottom: '30px',
  paddingTop: '20px',
  marginBottom: '60px'
};

function Patron(){
  return (
    <div>
      <div className="introBox" style={picBoxStyle}>
        <style jsx global>{`
          .introBox {
            background: url(${beer}) no-repeat center center;
            background-size: cover;
          }
        `}</style>
      </div>
      <div style={patronStyle}>
        <h1>Welcome to The Tap Room!</h1>
      
        <Link to="/kegList" >Keg List</Link>
        <style jsx global>{`
        a:hover {
          color: "yellow";
        }
      `}</style>
      </div>
    </div>
   
  );
}

export default Patron;