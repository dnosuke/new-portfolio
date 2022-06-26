import React from 'react';
import { About } from './components/About';
import { ImageHome } from './components/Image';
import { Introduce } from './components/Introduce';
import { Navbar } from './components/Navbar';
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
    </div>
  );
}

export default App;
