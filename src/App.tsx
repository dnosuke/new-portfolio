import React from 'react';
import { ImageHome } from './components/Image';
import { Introduce } from './components/Introduce';
import { Navbar } from './components/Navbar';
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
    </div>
  );
}

export default App;
