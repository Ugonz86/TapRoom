import React from 'react';
import beer from '../assets/images/beer.jpg';

var homeStyle = {
  textAlign: 'center',
  fontFamily: 'Montserrat, sans-serif',
};

function Home(){
  return (
    <div>
    {/* <ImageBackground source={beer} style={{width: '100%', height: '100%'}}>
  </ImageBackground> */}
    {/* <style jsx global>{`
          body {
            background-image: url(../../assets/images/beer.jpg);
          }
      `}</style> */}
      <h1 style={homeStyle}>Welcome to The Tap Room!</h1>
      <hr />
    </div>
  );
}

export default Home;