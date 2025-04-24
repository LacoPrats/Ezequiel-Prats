import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      className="particles-canvas"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          color: { value: "#a855f7" },
          links: {
            enable: true,
            color: "#a855f7",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
