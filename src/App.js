import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <a-scene>
        <a-entity
          id="box"
          geometry="primitive: box"
          material="src: ./assets/dirt.jpg"
          position="-1 0.5 -3"
          shadow
        />

        <a-entity
          id="sphere"
          geometry="primitive: sphere; radius: 1.25"
          material="src: ./assets/stone.jpg"
          position="0 1.25 -5"
          animation="property: scale; dir: alternate; loop: true; to: 1.1 1.1 1.1; dur: 100"
          shadow
        />
        <a-entity
          id="cylinder"
          position="1 0.75 -3"
          geometry="primitive: cylinder; radius: 0.5; height: 1"
          material="src: ./assets/wood.png"
          rotation="45 0 0"
          shadow
        />

        <a-entity
          id="plane"
          position="0 0 -4"
          rotation="-90 0 0"
          geometry="primitive: plane; width: 10; height: 10"
          material="src: ./assets/grass.jpg"
          shadow
        />

        <a-entity
          id="sky"
          geometry="primitive: sphere; radius: 3000"
          material="shader: flat; src: ./assets/venice.jpg; side: back"
        />

        <a-entity
          id="lightSphere"
          geometry="primitive: sphere; radius: 0.2"
          material="color: white; shader: flat"
          light="type: point; color: white"
          position="-4 3 -1"
          animation="property: position; dir: alternate; loop: true; to: 4 3 -1; dur: 2000"
        />

        <a-entity
          id="shooting"
          particle-system="preset: default; color: #515; particleCount: 1000"
          position="0 1.25 -5"
        />

        <a-entity
          id="snow"
          particle-system="preset: snow; particleCount: 1000"
        />
      </a-scene>
    );
  }
}

export default App;
