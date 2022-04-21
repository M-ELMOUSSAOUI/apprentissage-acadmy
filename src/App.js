import React from 'react';
import About from './Components/About';
import Feature from './Components/Feature';
import Header from './Components/Header'
import aboutImg from './images/about.jpg'
import comentImg from './images/coments.jpg'
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';
import Coments from './Components/Coments'

function App() {

  return (
    <div className="App">
      <Header />
      <Feature/>
      <About image={aboutImg} title='Qui sommes-nous?' />
      <Presentation/>
      <Coments image={comentImg} />
      <Contact/>
    </div>
  );
}

export default App;
