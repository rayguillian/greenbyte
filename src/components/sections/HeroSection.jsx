import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/images/hero1bg.svg'; // Import the full hero image

const HeroSection = () => {
  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeInTitle, setFadeInTitle] = useState(false);
  const [fadeInSlogan, setFadeInSlogan] = useState(false);

  useEffect(() => {
    // Trigger the image and title to fade in immediately after the component mounts
    setFadeInImage(true);
    setFadeInTitle(true);

    // Set a timeout to toggle the fadeIn state for the slogan shortly after the title
    const sloganTimeout = setTimeout(() => {
      setFadeInSlogan(true);
    }, 450); // Delay for the slogan to fade in 0.75 seconds after the component mounts

    return () => {
      clearTimeout(sloganTimeout);
    };
  }, []);

  // Inline style for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: fadeInImage ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
    transform: 'translateY(0)',
    height: '100vh', // Ensure the background covers the entire viewport height
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center text-white overflow-hidden"
      style={backgroundImageStyle} // Apply inline style
    >
      <h1
        className="text-6xl md:text-4xl font-bold text-center"
        style={{
          opacity: fadeInTitle ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
          transitionDelay: '0.1s',
          textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
        }}
      >
        <span className="text-green-500">Green</span><span className="text-blue-600">byte Studios</span>
      </h1>
      <p
        className="text-xl md:text-lg mt-4 text-center"
        style={{
          opacity: fadeInSlogan ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out',
          transitionDelay: '0.25s',
          textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
        }}
      >
        Bæredygtig webbureau{' '}
        <span className="text-blue-500">der matcher dine bæredygtige principper</span>
      </p>
    </div>
  );
};

export default HeroSection;
