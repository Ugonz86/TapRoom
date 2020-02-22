import React from 'react';
import beer1 from '../assets/images/beer1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

var picBoxStyle = {
  backgroundColor: 'transparent', 
  height: '400px',
};

var infoStyle = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'black',
  paddingBottom: '30px',
  paddingTop: '25px',
  marginBottom: '60px',
  letterSpacing: '3px',
};

var legend = {
  display: 'flex',
  justifyContent: 'center'
};

var socialMediaStyle = {
  background: 'black',
  padding: '25px 50px',
  display: 'inline-block',
  position: 'inherit',
  textAlign: 'center',
};

function Home(){
  return (
    <div>
      <div className="introBox" style={picBoxStyle}>
        <style jsx global>{`
          .introBox {
            background: url(${beer1}) no-repeat center center;
            background-size: cover;
          }
        `}</style>
      </div>

      <div style={infoStyle}>
        <p style={{fontSize: '30px'}}>Welcome to The Tap Room!</p>
        <p style={{textAlign: 'left', paddingLeft: '25px', lineHeight: '25px'}}>The Tap Room is an independent craft brewery founded in 2020. Located at 1000 Third Avenue in downtown Seattle’s neighborhood, The Tap Room is the perfect place to taste world wide beer, enjoy tapas, socialize, play games, watch sports and more with a family friendly atmosphere.</p>

        <p style={{textAlign: 'left', paddingLeft: '25px'}}>The Tap Room is ADA accessible. Opens at 11 AM  daily. Come join us for a beer or brewery tour!</p>
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
        {/* <ul>
          <p>Ale</p>
          <p>Hybrid</p>
          <p>Lager</p>
          <p>Specialty</p>
          <p>Stout</p>
        </ul> */}
        <div style={socialMediaStyle}>
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>&nbsp; &nbsp;
          <a href="https://www.twitter.com/jamesqquick" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>&nbsp; &nbsp;
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>&nbsp; &nbsp;
        </div>
      </div>
    </div>
    
  );
}

export default Home;