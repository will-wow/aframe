import React from "react";
import { Entity } from "aframe-react";

const Venice = () => (
  <Entity
    id="sky"
    geometry="primitive: sphere; radius: 3000"
    material="shader: flat; src: ./assets/venice.jpg; side: back"
  />
);

export default Venice;
