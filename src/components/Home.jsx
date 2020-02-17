import React from 'react';
import beer1 from '../assets/images/beer1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

var picBoxStyle = {
  // marginTop: '50px',
  backgroundColor: 'transparent', 
  height: '400px',
  // background: 'url(${beer}) no-repeat center center fixed'
};

var infoStyle = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'black',
  // borderRadius: '50px',
  // paddingLeft: '20px',
  paddingBottom: '30px',
  paddingTop: '25px',
  marginBottom: '60px',
  // marginLeft: '40px',
  
  // marginTop: '50px',
  letterSpacing: '3px',
  // fontSize: '30px',
 
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

      {/* <div style={}>

      </div> */}
    </div>

    
  );
}

export default Home;