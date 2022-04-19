import React from 'react';
import About from './Components/About';
import Feature from './Components/Feature';
import Header from './Components/Header'
import aboutImg from './images/about.jpg'
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';

function App() {

  return (
    <div className="App">
      <Header />
      <Feature/>
      <About image={aboutImg} title='Qui sommes-nous?' />
      <Presentation/>
      <Contact/>
    </div>
  );
}

export default App;
