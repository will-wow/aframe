import React from 'react';
import { Entity } from 'aframe-react';

const Tree = ({ position, scale, radius, height, onMouseDown, onMouseUp }) => (
  <Entity
    clickable
    geometry={{ primitive: 'cylinder', radius, height }}
    material={{ src: './assets/bark.jpg' }}
    position={position}
    scale={scale}
    events={{
      mousedown: onMouseDown,
      mouseup: onMouseUp
    }}
  />
);

export default Tree;
