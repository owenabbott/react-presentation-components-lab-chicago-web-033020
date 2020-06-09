import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={console.log("I say I'm happy, but on the inside, I'm actually quite sad.")} />
  </div>,
  document.getElementById('root')
);