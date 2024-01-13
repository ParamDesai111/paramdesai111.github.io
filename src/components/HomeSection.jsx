import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import logo1 from '../images/gear.png'; // Replace with your image paths
import logo2 from '../images/gear.png';
// ... other logo imports ...

function HomeSection() {
  const [showParticles, setShowParticles] = useState(true);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1 // Put the particles behind your content
    },
    particles: {
      number: {
        value: 10, // Number of particles (logos)
        density: {
          enable: true,
          area: 800
        }
      },
      shape: {
        type: 'image',
        image: [
          { src: logo1, height: 20, width: 20 },
          { src: logo2, height: 20, width: 20 },
          // Add more logos here
        ]
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 30, // Size of logos
        random: { enable: true, minimumValue: 10 }
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        outMode: 'out',
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        onClick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    detectRetina: true
  };


  return (
    <section id="home" className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Hi, I'm Param Desai</h1>
          <p>I'm a full stack engineer and a software developer with a passion to learn Artificial Intelligence and Machine Learning</p>
        </div>
        {showParticles && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
          />
        )}
      </div>
      <button onClick={() => setShowParticles(!showParticles)}>
        Toggle Particles
      </button>
    </section>
  );
}

export default HomeSection;
