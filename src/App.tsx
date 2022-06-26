import React from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ImageHome } from './components/Image';
import { Introduce } from './components/Introduce';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Qualification } from './components/Qualification';
import { Skills } from './components/Skills';
import { Social } from './components/SocialMedia';
import * as C from './styles';


function App() {


  return (
    <div className="App">
      <Navbar />
      <C.Container>
        <Social />
        <Introduce />
        <ImageHome />
      </C.Container>
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App;
