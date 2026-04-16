import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo, {Hero} from './components/Header/header';
import Main, {MainBottom} from './components/Main/main';
import Footer from './components/Footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Logo />
   <Hero />
   <Main />
   <MainBottom />
   <Footer />
  </React.StrictMode>
);

