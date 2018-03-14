import React from 'react';
import { Entity } from 'aframe-react';

import { sample } from '../shared/random';

const RandomBox = () => (
  <Entity
    geometry={{ primitive: 'box' }}
    material={{ color: sample(['skyblue', 'red']) }}
    position={randomPosition()}
    scale={randomScale()}
  />
);

export default RandomBox;

const randomPositionElement = () => Math.random() * 3 - 1.5;

const randomPosition = () => ({
  x: randomPositionElement(),
  y: randomPositionElement(),
  z: randomPositionElement() - 5
});

const randomScale = () => ({
  x: randomPositionElement(),
  y: randomPositionElement(),
  z: randomPositionElement()
});
