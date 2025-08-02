'use client';

import React, {useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";


function ParticleBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then( () => {
      setIsClient(true);
    })
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  }
  const options = useMemo(() => ({
    fullScreen: {enable: false },
    background: {
      color: "",

    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        }
      }
    },
    particles: {
      zIndex: 1,
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#4287f5',
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      links: {
        enable: true,
        color: "#000000",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 2,
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacityMin: 0.1
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        rotateX: 600,
        rotateY: 1200
      }
    },
    
  }))

  return (
    <>
    {isClient ? 
    <Particles id="tsparticles" options={options} className='h-[91dvh] max-h-[900px] '>

    </Particles>
    : 
    <div className='h-[91dvh] max-h-[900px] '>

    </div> 
    }
    </>
  )
}

export default ParticleBackground