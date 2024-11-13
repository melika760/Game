import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Play from './components/Play';
import Footer from './components/Footer';
import { Contextprovider } from './components/context/ScoreContext';

function App() {
  return (
  
    <Contextprovider>
    <Heading/>
    <Play/>
    <Footer/>
    </Contextprovider>

    
  );
}

export default App;
