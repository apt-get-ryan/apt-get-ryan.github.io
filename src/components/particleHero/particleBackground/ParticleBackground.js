'use client';
import React, {useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from 'next-themes';

let initialized = false;
async function ensureParticlesInit() {
  if(!initialized) {
    await initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
    initialized = true;
  }
}

function ParticleBackground() {
  const [isClient, setIsClient] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    ensureParticlesInit().then(() => setIsClient(true));
  }, []);


  const options = {
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
        value: 140,
        density: {
          enable: true,
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
        color: "#737373",
        distance: 150,
        opacity: 0.4,
        width: 2,
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false
        }
      },
      move: {
        enable: true,
        speed: 2.2,
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        rotateX: 0,
        rotateY: 0
      }
    },
    
  }

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