import React from 'react';
import { render } from 'react-dom';

const App = () => (<div>
    <h2>Hello react!!!</h2>
    <p>This is react component!!!</p>
</div>);

render(<App />, document.getElementById('app'));