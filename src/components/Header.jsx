import React from 'react';
import { Link } from 'react-router-dom';


var headerStyle = {
  backgroundColor: 'black',
  textAlign: 'center',
  padding: '20px',
  // marginTop: '80px',
  textDecoration: 'none',
  fontSize: '30px',
  wordSpacing: '20px',
  letterSpacing: '5px',
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
          color: orange;
        }
      `}</style>
      <nav>
        <Link to="/" >Home</Link>  <Link to="/employee" >Employee</Link>  <Link to="/patron" >Patron</Link> <Link to="/account" >LogIn</Link>
      </nav>
      
    </div>
    
  );
}

export default Header;