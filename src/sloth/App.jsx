import React from 'react';
import { Entity, Scene } from 'aframe-react';
import Tree from './Tree';

import './climber-component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      treeY: 10,
      grabbing: false,
      grabStart: undefined
    };
  }

  onMouseDown = () => {
    console.log('down');
    this.setState({ grabbing: true })
  };

  onMouseUp = () => {
    console.log('mouseup');
    this.setState({ grabbing: false })
  };

  onMove = (event) => {
    const { grabbing } = this.state;

    if (!grabbing) {
      return;
    }

    const {oldY, newY, timeDelta} = event.detail;

    const speed = (newY - oldY) / timeDelta;

    console.log('move', oldY, newY, timeDelta);

    this.setState({treeY: newY});
  };

  render() {
    const { treeY } = this.state;

    return (
      <Scene>
        <Tree
          position={{ x: 0, y: treeY, z: -2.5 }}
          radius={2}
          height={40}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
        />

        <Entity
          progressive-controls
        >
          <Entity className="left-controler" climber events={{
            move: this.onMove
          }} />
          <Entity className="right-controler" climber />
        </Entity>

        <Entity
          geometry="primitive: sphere; radius: 3000"
          material="shader: flat; src: ./assets/forest.jpg; side: back"
        />
      </Scene>
    );
  }
}

export default App;
