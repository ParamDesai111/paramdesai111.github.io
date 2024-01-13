import React from 'react';
import Particles from 'react-tsparticles';
import logoImage from '../path-to-your-logo-image.png'; // Replace with your logo image path

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'image',
            image: {
              src: logoImage,
              width: 100,
              height: 100,
            },
          },
          move: {
            enable: true,
            speed: 3,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 30,
            random: true,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
