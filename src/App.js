import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

class App extends Component {
  render() {
    return (
      <Scene>
        <Entity
          geometry={{ primitive: 'box' }}
          material={{ src: './assets/dirt.jpg' }}
          position={{ x: -1, y: 0.5, z: -3 }}
          shadow
        />

        <Entity
          geometry={{ primitive: 'sphere', radius: 1.25 }}
          material={{ src: './assets/stone.jpg' }}
          position={{ x: 0, y: 1.25, z: -5 }}
          animation={{
            property: 'scale',
            dir: 'alternate',
            loop: 'true',
            to: '1.1 1.1 1.1',
            dur: 100
          }}
          shadow
        />
        <Entity
          position="1 0.75 -3"
          geometry="primitive: cylinder; radius: 0.5; height: 1"
          material="src: ./assets/wood.png"
          rotation="45 0 0"
          shadow
        />

        <Entity
          position="0 0 -4"
          rotation="-90 0 0"
          geometry="primitive: plane; width: 10; height: 10"
          material="src: ./assets/grass.jpg"
          shadow
        />

        <Entity
          id="sky"
          geometry="primitive: sphere; radius: 3000"
          material="shader: flat; src: ./assets/venice.jpg; side: back"
        />

        <Entity
          geometry="primitive: sphere; radius: 0.2"
          material="color: white; shader: flat"
          light="type: point; color: white"
          position="-4 3 -1"
          animation="property: position; dir: alternate; loop: true; to: 4 3 -1; dur: 2000"
        />

        <Entity
          particle-system="preset: default; color: #515; particleCount: 1000"
          position="0 1.25 -5"
        />

        <Entity particle-system="preset: snow; particleCount: 1000" />
      </Scene>
    );
  }
}

export default App;
