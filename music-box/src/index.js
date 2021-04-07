import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './assets/components/NavBar';
import HomePage from './assets/components/HomePage';
import './assets/css/style.css';
import './assets/css/reset.css';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
