import React from 'react';
import { Entity } from 'aframe-react';

import { randomScale, sample, randomPosition } from './random';

const RandomBox = () => (
  <Entity
    geometry={{ primitive: 'box' }}
    material={{ color: sample(['skyblue', 'red']) }}
    position={randomPosition()}
    scale={randomScale()}
  />
);

export default RandomBox;
