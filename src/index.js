import React from 'react';
import ReactDOM from 'react-dom';
import App from './gaze/App';
import registerServiceWorker from './registerServiceWorker';

import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
