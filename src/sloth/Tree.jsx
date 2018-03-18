import React from "react";
import { Entity } from "aframe-react";

const Tree = ({ position, scale, radius, height }) => {
  return (
    <Entity
      geometry={{ primitive: "cylinder", radius, height }}
      material={{ src: "./assets/bark.jpg" }}
      position={position}
      scale={scale}
    />
  );
};

export default Tree;
