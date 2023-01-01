import React from 'react'
import Container from 'react-bootstrap/Container'
import './App.css';
import Issues from './components/issues';
import Search from './components/Search';

function App() {
  return (
    <Container>
      <Search />
      <Issues />
    </Container>
  );
}

export default App
