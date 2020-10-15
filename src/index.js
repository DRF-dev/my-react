import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
import './index.scss';

const data = [{
  id: '12345',
  name: 'Cyril',
  phone: '0606060606',
  key: 0,
}, {
  id: '12345',
  name: 'Cyril',
  phone: '0606060606',
  key: 1,
}, {
  id: '12345',
  name: 'Cyril',
  phone: '0606060606',
  key: 2,
}];

const App = () => (
  <div>
    {data.map((item) => <Home key={item.key} data={item} />)}
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
