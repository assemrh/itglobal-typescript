import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Home/>
      </Container>
      <GlobalStyle/>
    </div>
  );
}

export default App;
