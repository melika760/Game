import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Play from './components/Play';
import Footer from './components/Footer';
import { Contextprovider } from './components/context/ScoreContext';
import Score from './components/Score';

function App() {
  return (
  
    <Contextprovider>
      <Score/>
    <Heading/>
    <Play/>
    <Footer/>
    </Contextprovider>

    
  );
}

export default App;
