import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>Welcome To HR Portal​</h1>
      {/* <p>What are you waiting for?</p> */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >

        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
           
        </Button>
      </div>
      <br/>
      
    </div>
    {/* <div className='hero-partner'>
    <h1>Partners</h1>
    <img></img>

  </div> */}

  </>
  );
}

export default HeroSection;
