import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Contenedor from './Contenedor';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
)

ReactDOM.render(
  <Contenedor />,
  document.getElementById('contentMain')
)
