import React from "react";
import { Entity } from "aframe-react";

import { sample, randomCoordinates } from "../shared/random";

const randomPositionElement = () => Math.random() * 3 - 1.5;

const randomPosition = () => ({
  x: randomPositionElement(),
  y: randomPositionElement(),
  z: randomPositionElement() - 5
});

const randomScale = () => randomCoordinates(randomPositionElement);

const RandomBox = () => (
  <Entity
    geometry={{ primitive: "box" }}
    material={{ color: sample(["skyblue", "red"]) }}
    position={randomPosition()}
    scale={randomScale()}
  />
);

export default RandomBox;
