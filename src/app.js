import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/places/Index';
import {BrowserRouter, Route} from 'react-router-dom';

import './scss/style.scss';


class App extends React.Component {
  render() {
    return (
      <Route exact path='/' component={Index} />
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
