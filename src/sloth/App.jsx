import React from "react";
import { Entity, Scene } from "aframe-react";
import Tree from "./Tree";

const App = () => (
  <Scene>
    <Tree position={{ x: 0, y: 10, z: -4 }} radius={2} height={40} />

    <Entity
      geometry="primitive: sphere; radius: 3000"
      material="shader: flat; src: ./assets/forest.jpg; side: back"
    />
  </Scene>
);

export default App;
