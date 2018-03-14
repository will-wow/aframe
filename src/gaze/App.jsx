import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';

import Vencie from '../shared/Venice';

const MATERIALS = {
  LEAD: 'lead',
  GOLD: 'gold'
};

const App = () => (
  <Scene>
    <Vencie />

    <MidasBox position={{ x: -1, y: 0, z: -4 }} />
    <MidasBox position={{ x: 0, y: 0, z: -4 }} />
    <MidasBox position={{ x: 1, y: 0, z: -4 }} />
    <MidasBox position={{ x: -1, y: 1, z: -4 }} />
    <MidasBox position={{ x: 0, y: 1, z: -4 }} />
    <MidasBox position={{ x: 1, y: 1, z: -4 }} />
    <MidasBox position={{ x: -1, y: -1, z: -4 }} />
    <MidasBox position={{ x: 0, y: -1, z: -4 }} />
    <MidasBox position={{ x: 1, y: -1, z: -4 }} />

    <Entity
      geometry={{ primitive: 'plane', width: 20, height: 20 }}
      position={{ x: 0, y: -3, z: -2 }}
      rotation="-90 0 0"
      material="src: ./assets/grass.jpg"
      shadow
    />

    <Entity primitive="a-camera">
      <Entity
        cursor={{ fuse: 'true', fuseTimeout: 500 }}
        position={{ x: 0, y: 0, z: -1 }}
        geometry={{ primitive: 'ring', radiusInner: 0.02, radiusOuter: 0.03 }}
        material={{ color: 'black', shader: 'flat' }}
      />
    </Entity>
  </Scene>
);

export default App;

class MidasBox extends Component {
  constructor() {
    super();

    this.state = {
      boxMaterial: MATERIALS.LEAD
    };
  }

  onClick = () => this.setState({ boxMaterial: MATERIALS.GOLD });

  render() {
    const { boxMaterial } = this.state;
    const { position } = this.props;

    return (
      <Entity
        events={{
          click: this.onClick
        }}
        geometry={{ primitive: 'box' }}
        material={{ src: `./assets/${boxMaterial}.jpg` }}
        position={position}
        shadow
      />
    );
  }
}
