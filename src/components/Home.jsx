import React from 'react';
import beerbk from '../assets/images/beerbk.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

var picBoxStyle = {
  position: 'relative',
  height: '400px',
};

var infoStyle = {
  textAlign: 'center',
  color: 'black',
  paddingBottom: '30px',
  paddingTop: '25px',
  marginBottom: '60px',
  letterSpacing: '3px',
  marginLeft: '50px',
  marginRight: '50px'
};

var legend = {
  display: 'flex',
  justifyContent: 'center'
};

var socialMediaStyle = {
  width: '100%',
  padding: '25px 50px',
  display: 'inline-block',
  position: 'inherit',
  textAlign: 'center',
  borderRadius: '5px'
};

var headerStyle2 = {
  backgroundColor: 'black',
  textAlign: 'center',
  padding: '20px',
  textDecoration: 'none',
  fontSize: '25px',
  wordSpacing: '20px',
  letterSpacing: '5px',
};

function Home(){
  return (
    <div>
      <div className="introBox" style={picBoxStyle}>
        <style jsx global>{`
          .introBox {
            
            background: url(${beerbk}) no-repeat center center;
            background-size: cover;
          }
        `}</style>
      </div>

      <div style={headerStyle2}>
        <nav>
          <Link  to="/">Events</Link>  <Link  to="/">Staff</Link>  <Link  to="/">Gallery</Link>
        </nav>
      </div>

      <div style={infoStyle}>
        <br/>
        <p style={{fontSize: '40px'}}>Welcome to The Tap Room!</p><br/>
        <p style={{textAlign: 'left', paddingLeft: '25px', lineHeight: '30px', fontSize: '20px'}}>The Tap Room is an independent craft brewery founded in 2020. Located at 1000 Third Avenue in downtown Seattle’s neighborhood, The Tap Room is the perfect place to taste world wide beer, enjoy tapas, socialize, play games, watch sports and more with a family friendly atmosphere.</p>
        <p style={{textAlign: 'left', paddingLeft: '25px', lineHeight: '30px', fontSize: '20px'}}>The Tap Room is ADA accessible. Opens at 11 AM  daily.</p>
        <p style={{textAlign: 'left', paddingLeft: '25px', lineHeight: '30px', fontSize: '20px'}}>Come join us for a beer or brewery tour!</p>
        <br/>
        <hr/>
        
        <h2>Our Beer Leyend</h2><br/>
        <div style={legend} className="legend-scale">
          <style jsx global>{`
            .legend-scale ul {
              margin: 0;
              padding: 0
              
              text-align: center;
              list-style: none;
              display: flex;
            }
            .my-legend .legend-scale ul li {
              
              width: 50px;
              margin-bottom: 6px;
              text-align: center;
              font-size: 80%;
              list-style: none;             
              }
            .legend-labels li span {
              margin-right: 10px;
              float: left;
              height: 20px;
              width: 20px;
              border-radius: 50px;
              }
          
            .my-legend a {
              
              color: #777;
              }
        
        `}</style>
          <ul className="legend-labels">
            <li style={{marginRight: '25px'}}><span style={{background: '#FFE100'}}></span>Ale</li>
            <li style={{marginRight: '25px'}}><span style={{background: '#FFA500'}}></span>Hybrid</li>
            <li style={{marginRight: '25px'}}><span style={{background: '#FF6E00'}}></span>Lager</li>
            <li style={{marginRight: '25px'}}><span style={{background: '#FF4800'}}></span>Specialty</li>
            <li style={{marginRight: '25px'}}><span style={{background: '#FF0000'}}></span>Stout</li>
          </ul>
        </div><br/>
        <hr/>
     
        <div className="socialMedia" style={socialMediaStyle}>
          <style jsx global>{`
            .facebook {
              color: black;
            }
            .instagram {
              color: black;
            }
            .twitter {
              color: black;
            }
        
        `}</style>
          <a href="https://www.facebook.com/learnbuildteach/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>&nbsp; &nbsp; &nbsp;
          <a  href="https://www.twitter.com/jamesqquick" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>&nbsp; &nbsp; &nbsp;
          <a href="https://www.instagram.com/learnbuildteach"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>&nbsp; &nbsp; &nbsp;
        </div><br/><br/>
        
      </div>
      <p style={{bottom: '0', position: 'absolute',  textAlign: 'center', width: '100%', marginBottom: '40px'}}>Copyright © 2020 The Tap Room. All Rights Reserved. - Site by UGR</p>
    </div>
    
  );
}

export default Home;