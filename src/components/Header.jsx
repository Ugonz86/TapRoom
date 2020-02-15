import React from 'react';
import { Link } from 'react-router-dom';

var headerStyle = {
  backgroundColor: 'black',
  textAlign: 'center',
  padding: '20px',
  textDecoration: 'none',
  fontSize: '30px',
  wordSpacing: '20px',
  letterSpacing: '5px',
  // fontFamily: 'Montserrat, sans-serif'
};

function Header(){
  return (
    <div style={headerStyle}>
      <style jsx global>{`
        html {
          font-family: Montserrat, sans-serif;
        }
        a {
          color: white;
          text-decoration: none;
        }
        a:hover {
          color: gold;
        }
      `}</style>
      <Link to="/" >Home</Link>  <Link to="/patron" >Patron</Link>  <Link to="/employee" >Employee</Link>
      <hr />
    </div>
    
  );
}

export default Header;