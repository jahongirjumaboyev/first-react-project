import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo, {Hero} from './components/Header/header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Logo />
   <Hero />
  </React.StrictMode>
);

